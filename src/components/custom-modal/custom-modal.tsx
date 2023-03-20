import React from "react";

type myProps = {
  openModal: boolean;
  closeModal: () => void;
  children: React.ReactNode;
};

export const CustomModal = ({ openModal, closeModal, children }: myProps) => {
  const handleCloseModal = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const target = e.target as HTMLDivElement;
    if (target.id === "modal-backdrop") closeModal();
  };

  if (!openModal) return null;

  return (
    <div
      id="modal-backdrop"
      className="bg-gray-900/70 fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-[99]"
      onClick={handleCloseModal}
    >
      <div className="">{children}</div>
    </div>
  );
};
