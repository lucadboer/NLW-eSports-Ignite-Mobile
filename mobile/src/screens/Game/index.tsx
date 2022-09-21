import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList, Text, View } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { TouchableOpacity, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons'

import logoImg from '../../assets/logo-nlw-esports.png'
import { Background } from '../../components/Background';
import { styles } from './styles';
import { GameParams } from '../../@types/navigation';
import { THEME } from '../../theme';
import { Heading } from '../../components/Heading'
import { DuoCard, DuoCardProps  } from '../../components/DuoCard'
import { DuoMatch } from '../../components/DuoMatch'




export function Game() {

  const [duos, setDuos] = useState<DuoCardProps[]>([])
  const [discordDuoSelected, setdiscordDuoSelected] = useState('')

  const route = useRoute()
  const navigation = useNavigation()
  const game = route.params as GameParams

  useEffect(() => {
    fetch(`http://192.168.0.5:3333/games/${game.id}/ads`)
    .then(res => res.json())
    .then(data => setDuos(data))
  }, [])

    function getDiscordUser(adsID: string) {
      fetch(`http://192.168.0.5:3333/ads/${adsID}/discord`)
      .then(res => res.json())
      .then(data => setdiscordDuoSelected(data.discord)
      )
    }

    function backHome() {
      navigation.goBack()
    }

    return (
    <Background>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}> 
            <TouchableOpacity onPress={backHome}>
              <Entypo
                name='chevron-thin-left'
                color={THEME.COLORS.CAPTION_300}
                size={30}
              />
            </TouchableOpacity>

              <Image
                source={logoImg}
                style={styles.logo}
              />

              <View
                style={styles.right}
              />
          </View>

          <Image
          source={{ uri: game.bannerUrl}}
          style={styles.cover}
          resizeMode="cover"
          />

        <Heading 
          title={game.title}
          subtitle='Conecte-se e comece a jogar!'
        />

        <FlatList
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <DuoCard 
              data={item} 
              onConecct={() => getDiscordUser(item.id)}
            />
          )}
          
          style={styles.containerList}
          contentContainerStyle={[duos.length > 0 ? styles.contentList : styles.emptyListContent]}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (

            <Text style={styles.emptyContent}>
              Não há anúncios publicados ainda
            </Text>
    )}
        />

        <DuoMatch 
        visible={discordDuoSelected.length > 0}
        discord={discordDuoSelected}
        onClose={() => setdiscordDuoSelected('')}
        />

        </SafeAreaView>
    </Background>
  );
}