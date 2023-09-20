import { FC, memo, useContext, useEffect, useState } from 'react';


import { Root, Button, View } from '@vkontakte/vkui'
// import * as icons from '@vkontakte/icons';
import './style.css';


//const platform = usePlatform();

export const App: FC<{ name: string }> = ({ name }) => {
  let [data, setData] = useState(name);
  let req = fetch('https://apis.anabasis.pro/api/addresses').then(res => res.json()).catch(e => console.error(e)).then(body => console.log(body))

  
  
  return (
    <>
      <h1>Hello {name}!</h1>
      <p>Start editing to see some magic happen :)</p>
     
    </>
  );
};
