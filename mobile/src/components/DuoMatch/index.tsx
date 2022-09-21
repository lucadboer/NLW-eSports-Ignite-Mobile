import React, { useState } from 'react';
import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { CheckCircle } from 'phosphor-react-native'
import * as Clipboard from 'expo-clipboard'

import { styles } from './styles';
import { THEME } from '../../theme';
import { Heading } from '../Heading';

interface Props extends ModalProps{
    discord: string
    onClose: () => void
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {

  const [isCopping, setIsCopping] = useState(false)

  async function handleCopyDiscordToClipboard() {
    setIsCopping(true)
    await Clipboard.setStringAsync(discord)

    Alert.alert('Discord Copiado!', 'Cole e adicione seu duo no discord!')
    setIsCopping(false)
  }

  return (
    <Modal
    animationType='fade'
    transparent
    statusBarTranslucent
    {...rest}
    >
        <View style={styles.container}>

            <View style={styles.content}>
                <TouchableOpacity 
                style={styles.closeIcon}
                onPress={onClose}
                >
                    <MaterialIcons 
                    name='close'
                    size={25}
                    color={THEME.COLORS.CAPTION_500}
                    />
                </TouchableOpacity>

                <CheckCircle 
                size={85}
                color={THEME.COLORS.SUCCESS}
                weight="regular"
                />

                <Heading
                title="Let's Play!"
                subtitle='Agora é só começar a jogar!'
                style={{alignItems: 'center', marginTop: 24}}
                />

                <Text style={styles.label}>
                    Adicione no Discord
                </Text>
                <TouchableOpacity
                onPress={handleCopyDiscordToClipboard} 
                style={styles.discordButton}
                disabled={isCopping}
                >
                    <Text style={styles.discord}>
                        {isCopping ? <ActivityIndicator /> : discord}
                    </Text>  
                </TouchableOpacity>
            </View>     
        </View>

    </Modal>
  );
}