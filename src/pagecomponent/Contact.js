import React from "react";
class Contact extends React.Component{
  render(){
    return (<div className="container">
        <h1 id= "cont" className= "info">Contact</h1>
        <table className="table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Social Media</th>
      <th scope="col"></th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td colspan="2">Facebook</td>
      <td>@omogerogba</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td colspan="2">Instagram</td>
      <td>@1693_war_ng</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Snapchat</td>
      <td>@iam_porto</td>
    </tr>
  </tbody>
</table>
    </div>)
  }
}
export default Contact;