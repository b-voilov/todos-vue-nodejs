# todos-vue-nodejs
<h1>Vuejs petproject</h1>
<h1>This on heroku https://todos-vue-nodejs.herokuapp.com/</h1>
<h2>Used technologies</h2>
<h3>At frontend</h3>
<ul>
  <li>Vuejs 2</li>
  <li>Vue CLI 3</li>
  <li>Vue router</li>
  <li>Vuex</li>
  <li>Vuetify</li>
  <li>compression-webpack-plugin</li>
  <li>vue2-datepicker</li>
</ul>
<h3>At backend</h3>
<ul>
  <li>Nodejs</li>
  <li>Express</li>
  <li>connect-gzip-static</li>
</ul>

<h2>Implemented features</h2>
<ul>
  <li><h3>With Vuex</h3>
    <ul>
      <li>Creating todo</li>
      <li>Editing todo</li>
      <li>Settign filters on todos
        <ul>
          <li>Completed</li>
          <li>Not completed</li>
          <li>On date</li>
          <li>Before date</li>
          <li>After date</li>
          <li>Int interval</li>
        </ul>
        Some of filters can be combined (completed + in interval)
      </li>
    </ul>
  </li>
  <li>
    <h3>With router.</h3>
    <div>There are 2 main layouts: "authorization" and "working with todos"
      <br/> and user can switch between them.</div>
  </li>
  <li>
    <h3>Other</h3>
    <ul>
      <li>Creation and usage to account on server that can be used to save todos to server. 
        <br/>Todos from server are loaded automatically after authorization
      </li>
      <li>Saving todos to local storage.
        <br/>Todos from local storage are loading automatically after entering "Working" layout
      </li>
      <li>
        JWT (JSON Web Token). Server sends it after authorization and binds it to ip of user. To get or edit data in db front end should provide webtoken recieved from server. </br>
        Every request concerning todos is validated on server (jwt stored on server is compared to jwt provided by frontend)
      </li>
    </ul>
  </li>
</ul>
