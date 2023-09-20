import { FC, memo, useContext, useEffect, useState } from 'react';


import { Root, Button, View } from '@vkontakte/vkui'
// import * as icons from '@vkontakte/icons';
import './style.css';



//const platform = usePlatform();

export const App: FC<{ name: string }> = ({ name }) => {
  let [data, setData] = useState(name);

  console.log(data);

  //  useEffect

  return (
    <>
      <h1>Hello {name}!</h1>
      <p>Start editing to see some magic happen :)</p>
     
    </>
  );
};
