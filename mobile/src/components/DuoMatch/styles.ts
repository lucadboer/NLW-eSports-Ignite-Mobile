import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.OVERLAY
  },

  content: {
    backgroundColor: THEME.COLORS.SHAPE,
    width: 311,
    alignItems: 'center',
    borderRadius: 8,
    justifyContent: 'center'
  },

  closeIcon: {
    alignSelf: 'flex-end',
    margin: 16,
  },

  label: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    marginTop: 24,
    marginBottom: 10,
  },

  discordButton: {
    width: 231,
    height: 48,
    backgroundColor: THEME.COLORS.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    borderRadius: 10
  },

  discord: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  }
});