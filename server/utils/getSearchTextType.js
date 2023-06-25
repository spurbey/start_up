export const getSearchInputTextType = (searchInputText) => {
    let fieldType;

    if (/\d/.test(searchInputText)){
      fieldType = "clubcode";
    } else {
      fieldType = "clubname";
    }
    return fieldType;
  };
  
  
  