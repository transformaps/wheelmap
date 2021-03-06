import React from 'react';
import sortBy from 'lodash.sortby';

import Form from '../../common/Form';
import I18n from '../../common/I18n';
import { Category, NodeType } from '../../common/models';
import { immutableMapOf } from '../../common/propTypes';

const { func, instanceOf, string } = React.PropTypes;

class NodeTypeSelect extends React.Component {
  static propTypes = {
    onChange: func,
    categories: immutableMapOf(instanceOf(Category)),
    nodeTypes: immutableMapOf(instanceOf(NodeType)),
    value: string
  };

  onChange = event => {
    this.props.onChange(event.target.value);
  };

  getOptions() {
    const { categories, nodeTypes } = this.props;

    const optGroups = categories.toArray().map(category => {
      const options = nodeTypes
        .filter(nodeType => nodeType.category === category.id)
        .toArray()
        .map(nodeType => ({
          label: I18n.t(`poi.name.${category.identifier}.${nodeType.identifier}`),
          value: nodeType.identifier
        }));

      return {
        label: I18n.t(`poi.category.${category.identifier}`),
        options: sortBy(options, 'label')
      };
    });

    return sortBy(optGroups, 'label');
  }

  render() {
    return (
      <Form.Select options={this.getOptions()} onChange={this.onChange} value={this.props.value} />
    );
  }
}

export default NodeTypeSelect;
