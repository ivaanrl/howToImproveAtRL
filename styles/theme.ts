export interface ThemeInterface {
  bgColor: string;
  bgColorDark: string;
  bgColorDarkHighlight: string;
  mainTextColor: string;
  mutedTextColor: string;
  highlightTextColor: string;
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
  medium: string;
  hard: string;
}

export const theme: ThemeInterface = {
  bgColorDark: '#002233',
  bgColorDarkHighlight: '#0b3042',
  bgColor: '#010c2e',
  mainTextColor: '#FFFFFF',
  mutedTextColor: '#ababab',
  highlightTextColor: '#FAA41A',
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
  easy: '',
  medium: '',
  hard: '',
};
