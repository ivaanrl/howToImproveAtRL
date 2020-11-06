export interface ThemeInterface {
  bgColor: string;
  bgColorLighter: string;
  bgColorDark: string;
  bgColorDarkHighlight: string;
  mainTextColor: string;
  mutedTextColor: string;
  darkTextColor: string;
  highlightTextColor: string;
  hoverHighlightTextColor: string;
  highlightTextColorDisabled: string;
  profileHeaderColorOP1: string;
  profileHeaderColorOP0: string;
  profilePictureBorderColor: string;
  defensiveColor: string;
  offensiveColor: string;
  supportColor: string;
  defensiveHoverColor: string;
  offensiveHoverColor: string;
  supportHoverColor: string;
  offensiveSelectBackgroundColor: string;
  offensiveSelectHoverColor: string;
  defensiveSelectBackgroundColor: string;
  defensiveSelectHoverColor: string;
  supportSelectBackgroundColor: string;
  supportSelectHoverColor: string;
  easy: string;
  easySelectBackgroundColor: string;
  easySelectHoverColor: string;
  medium: string;
  mediumSelectHoverColor: string;
  mediumSelectBackgroundColor: string;
  hard: string;
  hardSelectHoverColor: string;
  hardSelectBackgroundColor: string;
}

export const theme: ThemeInterface = {
  bgColorDark: '#002233',
  bgColorDarkHighlight: '#0b3042',
  bgColor: '#010c2e',
  bgColorLighter: '#011247',
  mainTextColor: '#FFFFFF',
  mutedTextColor: '#ababab',
  darkTextColor: 'black',
  highlightTextColor: '#FAA41A',
  hoverHighlightTextColor: '#fab648',
  highlightTextColorDisabled: '#c2a372',
  profileHeaderColorOP1: 'rgba(38, 64, 92, 1)',
  profileHeaderColorOP0: 'rgba(38, 64, 92, 0.6)',
  profilePictureBorderColor: '#0b3042',
  defensiveColor: '#1a9edb',
  offensiveColor: '#e61227',
  supportColor: '#2b8c45',
  defensiveHoverColor: '#02acfa',
  offensiveHoverColor: '#fa0019',
  supportHoverColor: '#23cc50',
  offensiveSelectBackgroundColor: 'rgba(249,188,188,0.3)',
  offensiveSelectHoverColor: 'rgba(249,188,188,0.5)',
  defensiveSelectBackgroundColor: 'rgba(206,238,252,0.5)',
  defensiveSelectHoverColor: 'rgba(206,238,252,1)',
  supportSelectBackgroundColor: 'rgba(43,149,69,0.1)',
  supportSelectHoverColor: 'rgba(43,149,69,0.3)',
  easy: '#A18910',
  easySelectBackgroundColor: 'rgba(225, 190, 14, 0.2)',
  easySelectHoverColor: 'rgba(225, 190, 14, 0.4)',
  medium: '#0C93B5',
  mediumSelectBackgroundColor: 'rgba(151, 227, 246, 0.3)',
  mediumSelectHoverColor: 'rgba(151, 227, 246, 0.7)',
  hard: '#af5bf0',
  hardSelectBackgroundColor: 'rgba(175,91,240,0.2)',
  hardSelectHoverColor: 'rgba(175,91,240,0.4)',
};
