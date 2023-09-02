const colors = {
  blackColor: '#161616',
  textColor: 'rgba(22, 22, 22, 0.7)',
  halfGrayColor: 'rgba(22, 22, 22, 0.5)',
  buttonsGrayColor: 'rgba(22, 22, 22, 0.8)',
  separatorsGrayColor: 'rgba(22, 22, 22, 0.1)',
  backgroundGrayColor: '#F6F6F7',
  backgroundWhiteColor: '#FCFCFC',
  whiteColor: '#FFFFFF',
  halfWhiteColor: 'rgba(255, 255, 255, 0.5)',
  greenColor: '#BEDBB0',
  secondBlackColor: '#121212',
  halfBlackColor: '#1F1F1F',
  violetColor: '#5255BC',
  lightVioletColor: '#ECEDFD',
  secondLightVioletColor: '#B8BCFD',
  filtersButtonLightColor: 'rgba(255, 255, 255, 0.8);',
};

export const light = {
  sidebar: {
    background: colors.whiteColor,
    logoFill: colors.halfBlackColor,
    logoFlashColor: colors.whiteColor,
    logoTextColor: colors.blackColor,
    myBoardsColor: colors.halfGrayColor,
    separatorLineColor: colors.separatorsGrayColor,
    createBoardColor: colors.blackColor,
    createButtonBackground: colors.greenColor,
    createButtonPlusFill: colors.secondBlackColor,
    selectedBoardBackground: colors.backgroundGrayColor,
    selectedBoardRightBorder: colors.greenColor,
    selectedBoardIconFill: colors.blackColor,
    selectedBoardTitleColor: colors.blackColor,
    selectedBoardPencilFill: colors.halfGrayColor,
    selectedBoardTrashFill: colors.halfGrayColor,
    boardIconFill: colors.halfGrayColor,
    boardTitleColor: colors.halfGrayColor,
    needHelpBackground: colors.backgroundGrayColor,
    needHelpTextColor: colors.blackColor,
    needHelpSpanColor: colors.greenColor,
    needHelpIconAndTextColor: colors.blackColor,
    logoutIconFill: colors.greenColor,
    logoutTextColor: colors.blackColor,
  },
  header: {
    background: colors.backgroundWhiteColor,
    menuButtonColor: colors.blackColor,
    themeSelectorColor: colors.buttonsGrayColor,
    themeListBackground: colors.backgroundWhiteColor,
    themeListItemColor: colors.blackColor,
    themeListItemHoverColor: colors.greenColor,
    userNameColor: colors.blackColor,
  },
  screensPage: {
    background: colors.backgroundGrayColor,
    filterButtonColor: 'rgba(22, 22, 22, 0.80)',
    filtersMenuBackground: colors.backgroundWhiteColor,
    filtersMenuTitleColor: colors.blackColor,
    filtersMenuCloseIconFill: colors.blackColor,
    filtersMenuSeparatorLineColor: colors.separatorsGrayColor,
    filtersMenuLabelColor: colors.blackColor,
    filtersMenuShowAllColor: colors.halfGrayColor,
    filtersMenuRadioTextColor: colors.halfGrayColor,
    filtersMenuSelectedRadioTextColor: colors.blackColor,
    screenPageText: colors.textColor,
    screenPageSpan: colors.greenColor,
  },
  mainDashBoard: {
    titleTextColor: colors.blackColor,
    addColumnButtonBackground: colors.whiteColor,
    addColumnButtonIconBackground: colors.blackColor,
    addColumnButtonIconPlusFill: colors.whiteColor,
    addColumnButtonTextColor: colors.blackColor,
    columnTitleColor: colors.blackColor,
    columnTitlePencilFill: colors.halfGrayColor,
    columnTitleTrashFill: colors.halfGrayColor,
  },
  card: {
    background: colors.whiteColor,
    titleColor: colors.blackColor,
    textColor: colors.textColor,
    separatorLineColor: colors.separatorsGrayColor,
    priorityColor: colors.halfGrayColor,
    priorityTextColor: colors.blackColor,
    deadlineColor: colors.halfGrayColor,
    deadlineDateColor: colors.blackColor,
    iconsFill: colors.halfGrayColor,
    bellIconFill: colors.greenColor,
    scrollLineColor: colors.separatorsGrayColor,
    addCardButtonBackground: colors.greenColor,
    addCardButtonIconBackground: colors.blackColor,
    addCardButtonIconPlusFill: colors.whiteColor,
    addCardButtonTextColor: colors.blackColor,
  },
  popUp: {
    background: colors.backgroundWhiteColor,
    titleColor: colors.blackColor,
    closeIconColor: colors.blackColor,
    inputBorderColor: colors.greenColor,
    inputPlaceholderColor: '#000000',
    inputTextColor: colors.blackColor,
    iconsTextColor: colors.blackColor,
    iconsFill: colors.halfGrayColor,
    selectedIconFill: colors.blackColor,
    backgroundTextColor: colors.blackColor,
    buttonBackground: colors.greenColor,
    buttonIconBackground: colors.blackColor,
    buttonIconPlusFill: colors.whiteColor,
    buttonTextColor: colors.blackColor,
    deadLineDateColor: colors.greenColor
  },
};

export const dark = {
  sidebar: {
    background: colors.secondBlackColor,
    logoFill: colors.halfBlackColor,
    logoFlashColor: colors.whiteColor,
    logoTextColor: colors.whiteColor,
    myBoardsColor: colors.halfWhiteColor,
    separatorLineColor: 'rgba(255, 255, 255, 0.1)',
    createBoardColor: colors.whiteColor,
    createButtonBackground: colors.greenColor,
    createButtonPlusFill: colors.secondBlackColor,
    selectedBoardBackground: colors.halfBlackColor,
    selectedBoardRightBorder: colors.greenColor,
    selectedBoardIconFill: colors.whiteColor,
    selectedBoardTitleColor: colors.whiteColor,
    selectedBoardPencilFill: colors.halfWhiteColor,
    selectedBoardTrashFill: colors.halfWhiteColor,
    boardIconFill: colors.halfWhiteColor,
    boardTitleColor: colors.halfWhiteColor,
    needHelpBackground: colors.halfBlackColor,
    needHelpTextColor: colors.whiteColor,
    needHelpSpanColor: colors.greenColor,
    needHelpIconAndTextColor: colors.whiteColor,
    logoutIconFill: colors.greenColor,
    logoutTextColor: colors.whiteColor,
  },
  header: {
    background: colors.blackColor,
    menuButtonColor: colors.whiteColor,
    themeSelectorColor: 'rgba(255, 255, 255, 0.80)',
    themeListBackground: colors.blackColor,
    themeListItemColor: colors.halfWhiteColor,
    themeListItemHoverColor: colors.greenColor,
    userNameColor: colors.whiteColor,
  },
  screensPage: {
    background: colors.halfBlackColor,
    filterButtonColor: 'rgba(255, 255, 255, 0.80)',
    filtersMenuBackground: colors.blackColor,
    filtersMenuTitleColor: colors.whiteColor,
    filtersMenuCloseIconFill: colors.whiteColor,
    filtersMenuSeparatorLineColor: 'rgba(255, 255, 255, 0.1)',
    filtersMenuLabelColor: colors.whiteColor,
    filtersMenuShowAllColor: colors.halfWhiteColor,
    filtersMenuRadioTextColor: colors.halfWhiteColor,
    filtersMenuSelectedRadioTextColor: colors.whiteColor,
    screenPageText: colors.halfWhiteColor,
    screenPageSpan: colors.greenColor,
  },
  mainDashBoard: {
    titleTextColor: colors.whiteColor,
    addColumnButtonBackground: colors.secondBlackColor,
    addColumnButtonIconBackground: colors.whiteColor,
    addColumnButtonIconPlusFill: colors.secondBlackColor,
    addColumnButtonTextColor: colors.whiteColor,
    columnTitleColor: colors.whiteColor,
    columnTitlePencilFill: colors.halfWhiteColor,
    columnTitleTrashFill: colors.halfWhiteColor,
  },
  card: {
    background: colors.secondBlackColor,
    titleColor: colors.whiteColor,
    textColor: colors.halfWhiteColor,
    separatorLineColor: colors.separatorsGrayColor,
    priorityColor: colors.halfWhiteColor,
    priorityTextColor: colors.whiteColor,
    deadlineColor: colors.halfWhiteColor,
    deadlineDateColor: colors.whiteColor,
    iconsFill: colors.halfWhiteColor,
    bellIconFill: colors.greenColor,
    scrollLineColor: colors.secondBlackColor,
    addCardButtonBackground: colors.greenColor,
    addCardButtonIconBackground: colors.blackColor,
    addCardButtonIconPlusFill: colors.whiteColor,
    addCardButtonTextColor: colors.blackColor,
  },
  popUp: {
    background: colors.blackColor,
    titleColor: colors.whiteColor,
    closeIconColor: colors.whiteColor,
    inputBorderColor: colors.greenColor,
    inputPlaceholderColor: colors.halfGrayColor,
    inputTextColor: colors.whiteColor,
    iconsTextColor: colors.whiteColor,
    iconsFill: colors.halfWhiteColor,
    selectedIconFill: colors.whiteColor,
    backgroundTextColor: colors.whiteColor,
    buttonBackground: colors.greenColor,
    buttonIconBackground: colors.blackColor,
    buttonIconPlusFill: colors.whiteColor,
    buttonTextColor: colors.blackColor,
    deadLineDateColor: colors.greenColor
  },
};

export const violet = {
  sidebar: {
    background: colors.violetColor,
    logoFill: colors.lightVioletColor,
    logoFlashColor: colors.violetColor,
    logoTextColor: colors.whiteColor,
    myBoardsColor: colors.halfWhiteColor,
    separatorLineColor: 'rgba(255, 255, 255, 0.1)',
    createBoardColor: colors.whiteColor,
    createButtonBackground: colors.secondLightVioletColor,
    createButtonPlusFill: colors.whiteColor,
    selectedBoardBackground: colors.halfWhiteColor,
    selectedBoardRightBorder: colors.whiteColor,
    selectedBoardIconFill: colors.whiteColor,
    selectedBoardTitleColor: colors.whiteColor,
    selectedBoardPencilFill: colors.halfWhiteColor,
    selectedBoardTrashFill: colors.halfWhiteColor,
    boardIconFill: colors.halfWhiteColor,
    boardTitleColor: colors.halfWhiteColor,
    needHelpBackground: 'rgba(236, 237, 253, 0.4)',
    needHelpTextColor: colors.whiteColor,
    needHelpSpanColor: colors.violetColor,
    needHelpIconAndTextColor: colors.whiteColor,
    logoutIconFill: colors.whiteColor,
    logoutTextColor: colors.whiteColor,
  },
  header: {
    background: colors.whiteColor,
    menuButtonColor: colors.blackColor,
    themeSelectorColor: colors.buttonsGrayColor,
    themeListBackground: colors.whiteColor,
    themeListItemColor: colors.blackColor,
    themeListItemHoverColor: colors.violetColor,
    userNameColor: colors.blackColor,
  },
  screensPage: {
    background: colors.lightVioletColor,
    filterButtonColor: 'rgba(22, 22, 22, 0.80)',
    filtersMenuBackground: colors.whiteColor,
    filtersMenuTitleColor: colors.blackColor,
    filtersMenuCloseIconFill: colors.blackColor,
    filtersMenuSeparatorLineColor: colors.separatorsGrayColor,
    filtersMenuLabelColor: colors.blackColor,
    filtersMenuShowAllColor: colors.halfWhiteColor,
    filtersMenuRadioTextColor: colors.halfWhiteColor,
    filtersMenuSelectedRadioTextColor: colors.blackColor,
    screenPageText: colors.textColor,
    screenPageSpan: colors.violetColor,
  },
  mainDashBoard: {
    titleTextColor: colors.blackColor,
    addColumnButtonBackground: colors.whiteColor,
    addColumnButtonIconBackground: colors.violetColor,
    addColumnButtonIconPlusFill: colors.whiteColor,
    addColumnButtonTextColor: colors.blackColor,
    columnTitleColor: colors.blackColor,
    columnTitlePencilFill: colors.halfGrayColor,
    columnTitleTrashFill: colors.halfGrayColor,
  },
  card: {
    background: colors.whiteColor,
    titleColor: colors.blackColor,
    textColor: colors.halfWhiteColor,
    separatorLineColor: colors.separatorsGrayColor,
    priorityColor: colors.halfWhiteColor,
    priorityTextColor: colors.blackColor,
    deadlineColor: colors.halfWhiteColor,
    deadlineDateColor: colors.blackColor,
    iconsFill: colors.halfWhiteColor,
    bellIconFill: colors.violetColor,
    scrollLineColor: colors.secondLightVioletColor,
    addCardButtonBackground: colors.violetColor,
    addCardButtonIconBackground: colors.whiteColor,
    addCardButtonIconPlusFill: colors.blackColor,
    addCardButtonTextColor: colors.whiteColor,
  },
  popUp: {
    background: colors.whiteColor,
    titleColor: colors.blackColor,
    closeIconColor: colors.blackColor,
    inputBorderColor: colors.violetColor,
    inputPlaceholderColor: colors.halfGrayColor,
    inputTextColor: colors.blackColor,
    iconsTextColor: colors.blackColor,
    iconsFill: colors.halfGrayColor,
    selectedIconFill: colors.blackColor,
    backgroundTextColor: colors.blackColor,
    buttonBackground: colors.violetColor,
    buttonIconBackground: colors.whiteColor,
    buttonIconPlusFill: colors.blackColor,
    buttonTextColor: colors.whiteColor,
    deadLineDateColor: colors.violetColor,
  },
};
