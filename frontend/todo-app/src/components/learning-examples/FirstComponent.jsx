import React, { Component } from "react";

class FirstComponent extends Component {
  render() {
    return <div class="MojaKomponenta">Moja komponenta je najbolja.</div>;
  }
}

export default FirstComponent;

class DummyComponent extends Component {
  render() {
    return <div class="MojaKomponenta">Dummy komponenta je najbolja.</div>;
  }
}

export { DummyComponent };
