"use client";

import { useState, useCallback } from "react";
import UserAccountNavbar from "@/app/components/ui/UserAccountNavbar";
import SearchInput from "@/app/components/ui/header/SearchInput";
import AddButton from "../AddButton";
import Modal from "../Modal";

const AddNoteModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <Modal onClose={onClose} title="Add Note">
      <div>
        <p>Modal content here</p>
      </div>
    </Modal>
  );
};

const TopBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <nav className="flex w-full items-center justify-between border-b border-gray-300 bg-white p-4 lg:h-20">
      <div className="flex items-center gap-4">
        <SearchInput />
        <AddButton onClick={handleOpenModal} />
      </div>
      <UserAccountNavbar />
      {isModalOpen && <AddNoteModal onClose={handleCloseModal} />}
    </nav>
  );
};

export default TopBar;
