import * as Device from "expo-device";
import JailMonkey from "jail-monkey";
import { useEffect, useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const DeviceSecurityGuard = () => {
  const [compromised, setCompromised] = useState(false);

  useEffect(() => {
    async function checkSecurity() {
      try {
        const expoRooted = await Device.isRootedExperimentalAsync();
        const jmCompromised = JailMonkey.isJailBroken();

        setCompromised(expoRooted || jmCompromised);
      } catch (err) {
        console.warn("Security check failed:", err);
      }
    }
    checkSecurity();
  }, []);

  const onPressClose = () => {
    setCompromised(false);
  };

  // If compromised, show modal; otherwise render app content
  return (
    <>
      {compromised && (
        <Modal transparent animationType="fade" visible>
          <View style={styles.backdrop}>
            <View style={styles.dialog}>
              <Text style={styles.title}>Error: Security Breach</Text>
              <Text style={styles.message}>
                Your device appears to be rooted or jailbroken. Access is
                restricted for security reasons.
              </Text>
              <TouchableOpacity style={styles.button} onPress={onPressClose}>
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#00000088",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  dialog: {
    width: "80%",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
    color: "#D32F2F",
  },
  message: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    color: "#333333",
  },
  button: {
    backgroundColor: "#D32F2F",
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default DeviceSecurityGuard;
