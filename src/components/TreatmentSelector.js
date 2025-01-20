// TreatmentSelectorPage.js
import React, { useState, useEffect } from "react";
import {
  DropdownButton,
  Modal,
  ModalHeader,
  ModalContent,
  Column,
  TreatmentItem,
  ResetButton,
  ModalActions,
  ActionButton,
  UpdateButton,
  DeleteButton,
  SelectedButton,
} from "../style/StyleDesign";
import SearchBarComponent from "../reusableComponenets/SearchBar";

const TreatmentSelector = ({ selectedTreatments, onSelectionUpdate }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [treatments, setTreatments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [temporarySelection, setTemporarySelection] = useState([...selectedTreatments]);
  const [showSelected, setShowSelected] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchTreatments = async () => {
      const data = [
        { id: 1, name: "Osimertinib", type: "EGFR", combinations: ["Osimertinib Monotherapy", "Osimertinib + Carboplatin", "Osimertinib + Pemetrexed"] },
        { id: 2, name: "Erlotinib", type: "EGFR", combinations: ["Erlotinib Monotherapy", "Erlotinib + Carboplatin", "Erlotinib + Pemetrexed"] },
        { id: 3, name: "Gefitinib", type: "EGFR", combinations: [] },
        { id: 4, name: "Amivantamab", type: "EGFR", combinations: [] },
        { id: 5, name: "Mobocertinib", type: "EGFR", combinations: [] },
      ];
      setTreatments(data);
    };
    fetchTreatments();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  const toggleTreatmentSelection = (treatment) => {
    const existingTreatment = temporarySelection.find((item) => item.name === treatment.name);
    if (existingTreatment) {
      setTemporarySelection(temporarySelection.filter((item) => item.name !== treatment.name));
    } else {
      setTemporarySelection([
        ...temporarySelection,
        { ...treatment, selectedCombinations: [...treatment.combinations] },
      ]);
    }
  };

  const toggleCombinationSelection = (treatment, combination) => {
    const updatedSelection = temporarySelection.map((item) => {
      if (item.name === treatment.name) {
        const isCombinationSelected = item.selectedCombinations.includes(combination);
        const updatedCombinations = isCombinationSelected
          ? item.selectedCombinations.filter((c) => c !== combination)
          : [...item.selectedCombinations, combination];
        return { ...item, selectedCombinations: updatedCombinations };
      }
      return item;
    });
    setTemporarySelection(updatedSelection);
  };

  const resetFilter = () => {
    setSearchTerm("");
    setTemporarySelection([]);
  };

  const saveSelection = () => {
    onSelectionUpdate(temporarySelection);
    setModalOpen(false);
  };

  const handleUpdate = () => {
    setIsEditing(true);
  };

  const saveChanges = () => {
    onSelectionUpdate(temporarySelection);
    setIsEditing(false);
  };

  const handleDelete = () => {
    setTemporarySelection([]);
    setShowSelected(false);
    setIsEditing(false);
  };

  const filteredTreatments = treatments.filter((treatment) =>
    treatment.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {!showSelected ? (
        <DropdownButton onClick={() => setModalOpen(true)}>
          {selectedTreatments.length > 0
            ? `${selectedTreatments[0].name}${
                selectedTreatments.length > 1 ? ` + ${selectedTreatments.length - 1} more` : ""
              }`
            : "Select Treatment"}
        </DropdownButton>
      ) : (
        <SelectedButton onClick={() => setShowSelected(false)}>Selected</SelectedButton>
      )}

      {isModalOpen && (
        <Modal>
          <ModalHeader>
            <h2>Select Treatment</h2>
            <SearchBarComponent
              searchTerm={searchTerm}
              onSearchChange={handleSearchChange}
              onClearSearch={clearSearch}
            />
          </ModalHeader>
          <ModalContent>
            <Column>
              <h3>RESULTS</h3>
              {filteredTreatments.map((treatment) => (
                <TreatmentItem key={treatment.id}>
                  <input
                    type="checkbox"
                    checked={temporarySelection.some((item) => item.name === treatment.name)}
                    onChange={() => toggleTreatmentSelection(treatment)}
                  />
                  {treatment.name} ({treatment.type})
                </TreatmentItem>
              ))}
              <ResetButton onClick={resetFilter}>Reset Filter</ResetButton>
            </Column>
            <Column>
              <h3>Selected Treatments</h3>
              {temporarySelection.length > 0 ? (
                <>
                  {temporarySelection.map((treatment, index) => (
                    <div key={index}>
                      <TreatmentItem>
                        <input
                          type="checkbox"
                          disabled={!isEditing}
                          checked
                          onChange={() => toggleTreatmentSelection(treatment)}
                        />
                        {treatment.name}
                      </TreatmentItem>
                      {treatment.combinations.map((combination, comboIndex) => (
                        <TreatmentItem key={comboIndex} style={{ marginLeft: "20px" }}>
                          <input
                            type="checkbox"
                            disabled={!isEditing}
                            checked={treatment.selectedCombinations.includes(combination)}
                            onChange={() => toggleCombinationSelection(treatment, combination)}
                          />
                          {combination}
                        </TreatmentItem>
                      ))}
                    </div>
                  ))}
                  <div style={{ marginTop: "20px" }}>
                    {isEditing ? (
                      <ActionButton primary onClick={saveChanges}>
                        Save Changes
                      </ActionButton>
                    ) : (
                      <UpdateButton onClick={handleUpdate}>Update</UpdateButton>
                    )}
                    <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
                  </div>
                </>
              ) : (
                <p>No treatments selected.</p>
              )}
            </Column>
          </ModalContent>
          <ModalActions>
            <ActionButton primary onClick={saveSelection}>
              Add Selected
            </ActionButton>
            <ActionButton onClick={() => setModalOpen(false)}>Cancel</ActionButton>
          </ModalActions>
        </Modal>
      )}
    </div>
  );
};

export default TreatmentSelector;