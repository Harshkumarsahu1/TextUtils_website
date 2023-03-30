import React from 'react'

export default function Alert(props) {
  return (
    props.alert &&
    <div class="alert alert-success" role="alert">
    {props.alert.type} <a href="#" class="alert-link"> : </a>{props.alert.msg}
  </div>
  )
}
