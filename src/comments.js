import React from 'react';
import {Comment, Form, Button, Header, Icon} from 'semantic-ui-react';
import people from "./people.png"


class Comments extends React.Component{

  render(){
    return(
      <Comment.Group style = {{marginLeft : "300px"}}>
        <Header as='h3' dividing>
          Comments
        </Header>
          <Comment>
            <Comment.Avatar src= {people} />
            <Comment.Content>
              <Comment.Author as='a'>LEE</Comment.Author>
              <Comment.Metadata>
                <div>Today at 5:42PM</div>
              </Comment.Metadata>
              <Comment.Text>언니 사랑해!</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>


          <Form reply>
            <Form.TextArea />
            <Button content='Add Reply' labelPosition='left' icon='edit' primary />
          </Form>
          <br/><br/>
          <Button color='facebook'>
            <Icon name='facebook' /> Facebook
          </Button>
          <Button color='twitter'>
            <Icon name='twitter' /> twitter
          </Button>
          <Button color='instagram'>
            <Icon name='instagram' /> Instagram
          </Button>
        </Comment.Group> )
}

}


export default Comments
