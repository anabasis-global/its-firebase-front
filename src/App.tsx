import { FC, memo, useContext, useEffect, useState } from 'react';


import { Root, Button, View } from '@vkontakte/vkui'
// import * as icons from '@vkontakte/icons';
import './style.css';


//const platform = usePlatform();

// function getItems = data => data.map((item, key) => { key, item })

export const App: FC<{ name: string }> = ({ name }) => {
  let [data, setData] = useState(name);
 
  // let req = await fetch('https://apis.anabasis.pro/api/addresses').then(res => res.json()).catch(e => console.error(e))
  // .then(body => setData(body.data))



useEffect( () => {
  console.log('app')

  setData("AppNameData")

  // async () => await fetch('https://apis.anabasis.pro/api/addresses')
})
  

  return (<>
      <h1>{name}</h1>

      {data}
    </>);
};
