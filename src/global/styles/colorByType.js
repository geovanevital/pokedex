const colorByType = (string, colors) => {
  let color;
  string === 'rock' ? color = colors?.rock :
    string === 'ghost' ? color = colors?.ghost :
      string === 'steel' ? color = colors?.steel :
        string === 'water' ? color = colors?.water :
          string === 'grass' ? color = colors?.grass :
            string === 'psychic' ? color = colors?.psychic :
              string === 'ice' ? color = colors?.ice :
                string === 'dark' ? color = colors?.dark :
                  string === 'fairy' ? color = colors?.fairy :
                    string === 'normal' ? color = colors?.normal :
                      string === 'fighting' ? color = colors?.fighting :
                        string === 'flying' ? color = colors?.flying :
                          string === 'poison' ? color = colors?.poison :
                            string === 'ground' ? color = colors?.ground :
                              string === 'bug' ? color = colors?.bug :
                                string === 'fire' ? color = colors?.fire :
                                  string === 'electric' ? color = colors?.electric :
                                    string === 'dragon' ? color = colors?.dragon :
                                      null
  return color;
};

export default colorByType;
