import React from 'react';
import {Image, Divider, Header, Icon} from 'semantic-ui-react';

import Comments from './comments.js'


import han from "./han.jpg"


function App() {
  return (
    <div>
<Image src = {han} centered/>
<Divider horizontal>
     <Header as='h4'>
       <Icon name='comment alternate' />
       Comments Please
     </Header>
   </Divider>

<Comments/>
<div>
    <Button circular color='facebook' icon='facebook' />
    <Button circular color='twitter' icon='twitter' />
    <Button circular color='linkedin' icon='linkedin' />
    <Button circular color='google plus' icon='google plus' />
  </div>
</div>
  );
}

export default App;
