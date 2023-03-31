import React, { useEffect, useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";

import { Audio } from "expo-av";
export default function App() {
  const [sounds, setSounds] = useState([]);
  const [sound1, setSound1] = useState();
  const [sound2, setSound2] = useState();
  const [sound3, setSound3] = useState();
  const [sound4, setSound4] = useState();
  const [currentSound, setCurrentSound] = useState(null);
  useEffect(() => {
    async function loadSounds() {
      const soundList = [
        {
          name: "Sound 1",
          file: require("./assets/musica.mp3"),
          img: require("./imgs/lofi1.jpg"),
        },
        {
          name: "Sound 2",
          file: require("./assets/musica2.mp3"),
          img: require("./imgs/lofi2.jpg"),
        },
        {
          name: "Sound 3",
          file: require("./assets/musica3.mp3"),
          img: require("./imgs/lofi3.jpg"),
        },
        {
          name: "Sound 4",
          file: require("./assets/musica4.mp3"),
          img: require("./imgs/lofi6.jpg"),
        },
        {
          name: "Sound 5",
          file: require("./assets/musica5.mp3"),
          img: require("./imgs/lofi5.jpg"),
        },
      ];
      const loadedSounds = await Promise.all(
        soundList.map(async (sound) => {
          const { sound: soundObject } = await Audio.Sound.createAsync(
            sound.file
          );
          return { ...sound, soundObject };
        })
      );
      setSounds(loadedSounds);
    }
    loadSounds();
  }, []);

  async function playSound(sound) {
    if (currentSound === sound.soundObject) {
      await currentSound.stopAsync();
      setCurrentSound(null);
      return;
    }
    if (currentSound) {
      await currentSound.stopAsync();
    }
    await sound.soundObject.playAsync();
    setCurrentSound(sound.soundObject);
  }

  async function playSound1() {
    if (currentSound === sound1) {
      // a mesma música já está tocando, não faz nada
      await currentSound.stopAsync();
      return;
    }
    if (currentSound) {
      // pausa a música atual se estiver tocando
      await currentSound.pauseAsync();
    }
    if (!sound1) {
      // cria a instância de som se ainda não existir
      const { sound } = await Audio.Sound.createAsync(
        require("./assets/musica.mp3")
      );
      setSound1(sound);
    }
    // começa a tocar a nova música e atualiza o estado
    await sound1.playAsync();
    setCurrentSound(sound1);
  }

  async function playSound2() {
    if (currentSound === sound2) {
      // a mesma música já está tocando, não faz nada
      await currentSound.stopAsync();
      return;
    }
    if (currentSound) {
      // pausa a música atual se estiver tocando
      await currentSound.stopAsync();
    }
    if (!sound2) {
      // cria a instância de som se ainda não existir
      const { sound } = await Audio.Sound.createAsync(
        require("./assets/musica2.mp3")
      );
      setSound2(sound);
    }
    // começa a tocar a nova música e atualiza o estado
    await sound2.playAsync();
    setCurrentSound(sound2);
  }

  async function playSound3() {
    if (currentSound === sound3) {
      // a mesma música já está tocando, não faz nada
      await currentSound.stopAsync();
      return;
    }
    if (currentSound) {
      // pausa a música atual se estiver tocando
      await currentSound.stopAsync();
    }
    if (!sound3) {
      // cria a instância de som se ainda não existir
      const { sound } = await Audio.Sound.createAsync(
        require("./assets/musica3.mp3")
      );
      setSound3(sound);
    }
    // começa a tocar a nova música e atualiza o estado
    await sound3.playAsync();
    setCurrentSound(sound3);
  }

  async function playSound4() {
    if (currentSound === sound4) {
      // a mesma música já está tocando, não faz nada
      await currentSound.stopAsync();
      return;
    }
    if (currentSound) {
      // pausa a música atual se estiver tocando
      await currentSound.stopAsync();
    }
    if (!sound4) {
      // cria a instância de som se ainda não existir
      const { sound } = await Audio.Sound.createAsync(
        require("./assets/musica4.mp3")
      );
      setSound4(sound);
    }
    // começa a tocar a nova música e atualiza o estado
    await sound4.playAsync();
    setCurrentSound(sound4);
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={require("./imgs/lofi4.jpg")}
      >
        <Text
          style={{
            fontSize: 20,
            marginTop: 60,
            color: "white",
            fontFamily: "monospace",
            alignSelf: "center",
          }}
        >
          Lofi Musics
        </Text>
        <ScrollView>
          {sounds.map((sound) => {
            return (
              <View
                key={sound.name}
                style={{ width: "100%", padding: 5, marginTop: 20 }}
              >
                <TouchableOpacity onPress={() => playSound(sound)}>
                  <Image
                    source={sound.img}
                    style={{
                      width: "100%",
                      height: 150,
                      borderWidth: 0.5,
                      borderColor: "white",
                    }}
                  />
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
