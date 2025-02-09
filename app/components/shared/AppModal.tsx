import { styleVariables } from "@/styles/variables";
import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Modal, ModalProps } from "react-native";

type AppModalProps = {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
} & ModalProps;

export const AppModal: FC<AppModalProps> = ({
  modalVisible,
  children,
  setModalVisible,
}) => {
  return (
    <Modal
      animationType="fade"
      visible={modalVisible}
      transparent={true}
      style={styles.modal}
    >
      <View style={styles.modalContent}>
        <Pressable style={styles.close} onPress={() => setModalVisible(false)}>
          <Ionicons
            name="close"
            color={styleVariables.colors.primary}
            size={30}
          />
        </Pressable>
        {children}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: styleVariables.gaps.g20,
    borderRadius: styleVariables.borderRadiuses.r15,
  },
  close: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: styleVariables.gaps.g10,
    backgroundColor: styleVariables.colors.bgLight,
    borderRadius: styleVariables.borderRadiuses.rCircle,
    justifyContent: "center",
  },
});
