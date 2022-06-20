import React, { useEffect, useState } from "react";
// import { TextInput } from "react-native";
import TextInput from "../components/TextInput";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Button from "../components/Button";
import ImagePick from "../components/ImagePick";
import axios from "axios";
import { pickImage, askForPermission, uploadImage } from "./upload";
export default function Dashboard({ navigation }) {
  const [name, setname] = useState("");
  const [desc, setdesc] = useState("");
  const [price, setprice] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [permissionStatus, setPermissionStatus] = useState(null);
  useEffect(() => {
    (async () => {
      const status = await askForPermission();
      setPermissionStatus(status);
    })();
  }, []);
  async function handlePress() {
    let photoURL;
    if (selectedImage) {
      const { url } = await uploadImage(
        selectedImage,
        `images`,
        "profilePicture"
      );
      photoURL = url;
    }
  }
  return (
    <Background>
      <Logo />
      <TextInput
        placeholder=" Name"
        onChangeText={(val) => {
          setname(val);
        }}
        value={name}
      />
      <TextInput
        placeholder=" Description"
        onChangeText={(val) => {
          setdesc(val);
        }}
        value={desc}
      />
      <TextInput
        placeholder=" Price"
        onChangeText={(val) => {
          setprice(val);
        }}
        value={price}
      />
      <ImagePick uri={setSelectedImage} />
      {console.log(selectedImage)}
      <Button
        onPress={() => {
          axios.post(
            "https://opensea-237e3-default-rtdb.firebaseio.com/data.json",
            {
              name: name,
              description: desc,
              price: price,
            }
          );
          setname("");
          setdesc("");
          setprice("");
          handlePress();
        }}
      >
        Submit
      </Button>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: "Root" }],
          })
        }
      >
        Logout
      </Button>
    </Background>
  );
}
