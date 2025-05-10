import type { ReactNode } from "react";
import { create } from "zustand";

export const useModalLoadingStore = create<{
  loadingVisible: boolean;
  showLoading: (value: boolean) => void;
}>((set) => ({
  loadingVisible: false,
  showLoading: (value: boolean) => set(() => ({ loadingVisible: value })),
}));

export const modalLoadingGetter = useModalLoadingStore.getState;
export const modalLoadingSetter = useModalLoadingStore.setState;

type ModalType = "success" | "error" | "info";

type ModalInfoType = {
  modalVisible: boolean;
  type: ModalType;
  message: string;
  onConfirm?: () => void | undefined;
  showVisible: (info: {
    modalVisible: boolean;
    type?: ModalType;
    message?: string;
    onConfirm?: () => void | undefined;
    reload?: boolean;
  }) => void;
  reload?: boolean;
};

export const useModalInfoStore = create<ModalInfoType>((set) => ({
  modalVisible: false,
  type: "info",
  message: "",
  onConfirm: undefined,
  reload: false,
  showVisible: (info) =>
    set((state) => ({
      ...state,
      modalVisible: info.modalVisible,
      type: info.type,
      message: info.message,
      onConfirm: info.onConfirm,
      reload: info.reload,
    })),
}));

export const modalInfoGetter = useModalInfoStore.getState;
export const modalInfoSetter = useModalInfoStore.setState;

type ModalDialogType = {
  modalVisible: boolean;
  type: "info" | "error" | "success" | "create";
  message: string | ReactNode;
  title: string;
  confirmBtnLabel?: string;
  cancelBtnLabel?: string;
  onConfirm: () => void;
  showVisible: (info: {
    modalVisible: boolean;
    type?: "info" | "error" | "success" | "create";
    message?: string | ReactNode;
    title?: string;
    confirmBtnLabel?: string;
    cancelBtnLabel?: string;
    onConfirm?: () => void;
  }) => void;
};

export const useModalDialogStore = create<ModalDialogType>((set) => ({
  modalVisible: false,
  type: "info",
  message: "",
  title: "",
  confirmBtnLabel: "Confirmar",
  cancelBtnLabel: "Cancelar",
  onConfirm: () => {},
  showVisible: (info) =>
    set((state) => ({
      ...state,
      modalVisible: info.modalVisible,
      type: info.type,
      message: info.message,
      title: info.title,
      onConfirm: info.onConfirm,
      confirmBtnLabel: info.confirmBtnLabel,
      cancelBtnLabel: info.cancelBtnLabel,
    })),
}));

export const modalDialogGetter = useModalDialogStore.getState;
export const modalDialogSetter = useModalDialogStore.setState;

type ModalCustomType = {
  modalVisible: boolean;
  content?: ReactNode;
  size: "md" | "xs" | "sm" | "lg" | "xl" | "xxl";
  containerClassName?: string;
  className?: string;
  showVisible: (info: {
    modalVisible: boolean;
    content?: ReactNode;
    size?: "md" | "xs" | "sm" | "lg" | "xl" | "xxl";
    containerClassName?: string;
    className?: string;
  }) => void;
};

export const useModalCustomStore = create<ModalCustomType>((set) => ({
  modalVisible: false,
  content: null,
  size: "md",
  containerClassName: "",
  className: "",
  showVisible: (info) =>
    set((state) => ({
      ...state,
      modalVisible: info.modalVisible,
      content: info.content,
      size: info.size,
      containerClassName: info.containerClassName,
      className: info.className,
    })),
}));

export const useModalDynamicStore = create<ModalCustomType>((set) => ({
  modalVisible: false,
  size: "md",
  showVisible: (info) =>
    set((state) => ({
      ...state,
      modalVisible: info.modalVisible,
      size: info.size,
    })),
}));

export const useModalDialogCustomStore = create<ModalDialogType>((set) => ({
  modalVisible: false,
  type: "info",
  message: "",
  title: "",
  confirmBtnLabel: "Confirmar",
  cancelBtnLabel: "Cancelar",
  onConfirm: () => {},
  showVisible: (info) =>
    set((state) => ({
      ...state,
      modalVisible: info.modalVisible,
      type: info.type,
      message: info.message,
      title: info.title,
      onConfirm: info.onConfirm,
      confirmBtnLabel: info.confirmBtnLabel,
      cancelBtnLabel: info.cancelBtnLabel,
    })),
}));

export const modalDialogCustomGetter = useModalDialogCustomStore.getState;
export const modalDialogCustomSetter = useModalDialogCustomStore.setState;