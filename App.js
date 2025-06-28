// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import GETAPI from "./src/GETAPI";
// import POSTAPI from "./src/POSTAPI";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <POSTAPI /> */}
//       <Text>Hello</Text>
//       {/* <GETAPI /> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// import React, { useEffect } from "react";
// import { Alert, Button, StyleSheet, View } from "react-native";
// import {
//   addSslPinningErrorListener,
//   initializeSslPinning,
// } from "react-native-ssl-public-key-pinning";

// export default function SecureApp() {
//   // Your real domain and array of Base64-encoded SHA-256 public-key hashes
//   const domainName = "your.server.com"; // ← replace with your actual domain
//   const shaKeys = ["AbC123…=", "XyZ456…="]; // ← replace with your real publicKeyHashes

//   useEffect(() => {
//     // 1️⃣ Initialize SSL pinning configuration
//     async function setupSSL() {
//       try {
//         await initializeSslPinning({
//           [domainName]: {
//             includeSubdomains: true,
//             publicKeyHashes: shaKeys,
//           },
//         });
//         console.log("🔒 SSL pinning initialized for", domainName);
//       } catch (err) {
//         console.error("Failed to initialize SSL pinning:", err);
//       }
//     }
//     setupSSL();

//     // 2️⃣ Listen for SSL‐pinning validation failures
//     const subscription = addSslPinningErrorListener((error) => {
//       console.warn("SSL pinning validation failed:", error);
//       Alert.alert(
//         "Security Warning",
//         "SSL pinning validation failed. Unable to establish a secure connection."
//       );
//     });

//     // Clean up the listener on unmount
//     return () => {
//       subscription.remove();
//     };
//   }, []);

//   // 3️⃣ Make a fetch call as usual—under the hood it’s pinned
//   const fetchSecureData = async () => {
//     try {
//       const response = await fetch(`https://${domainName}/api/data`);
//       const text = await response.text();
//       console.log("Secure response:", text);
//       Alert.alert("Success", "Received data securely!");
//     } catch (err) {
//       console.error("Fetch error (likely SSL pinning):", err);
//       Alert.alert("Error", "Could not fetch data securely.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Button title="Fetch Secure Data" onPress={fetchSecureData} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     paddingHorizontal: 20,
//   },
// });

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DeviceSecurityGuard from "./src/IsDeviceRootedOrJailBroken";

const App = () => {
  return (
    <View>
      <DeviceSecurityGuard />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
