import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NodesForm from '../common/Node/Form';

import NameCategorySection from './Section/NameCategory';
import AddressSection from './Section/Address';
import SimilarNodesSection from './Section/SimilarNodes';
import AccessibilitySection from './Section/Accessibility';
import ContactSection from './Section/Contact';
import OverviewSection from './Section/Overview';
import { NAME_CATEGORY, ADDRESS, SIMILAR_NODES, ACCESSIBILITY, CONTACT, OVERVIEW } from './models/sections';
import { activateSection } from './actions';

const SECTION_COMPONENTS = {
  [NAME_CATEGORY]: NameCategorySection,
  [ADDRESS]: AddressSection,
  [SIMILAR_NODES]: SimilarNodesSection,
  [ACCESSIBILITY]: AccessibilitySection,
  [CONTACT]: ContactSection,
  [OVERVIEW]: OverviewSection
};

const { shape, string, func } = React.PropTypes;

function Content({ params: { section } }) {
  const Section = SECTION_COMPONENTS[section];

  return (
    <div className="nodes-new-content">
      <NodesForm>
        <Section />
      </NodesForm>
    </div>
  );
}

Content.propTypes = {
  params: shape({
    section: string.isRequired
  }).isRequired,
  activateSection: func.isRequired
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    activateSection
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
