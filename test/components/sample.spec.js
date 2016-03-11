var React = require('react');
var TestUtils = require('react-addons-test-utils');
var assert = require('assert');

var First = require('./../../app/components/sample');

describe('Sample component First rendered', function(){

  before('Render react componet and set element', function(){

    var renderedComponent = TestUtils.renderIntoDocument(<First/>);
    var element = TestUtils.findRenderedDOMComponentWithTag(
      renderedComponent,
      'div'
    );
    this.element = element;
  });

  it('Verify tag of current element', function(){
    assert(this.element.tagName === 'DIV')
  })
});


describe('Details about the component', function(){
  before('Render number of li elements', function(){
    var renderedComponent = TestUtils.renderIntoDocument(<First/>);
    var elements = TestUtils.scryRenderedDOMComponentsWithTag(
      renderedComponent, 'li'
    );
    this.elements = elements;
  });

  it('No. of li to be 2', function(){
    assert(this.elements.length === 2);
  });
})