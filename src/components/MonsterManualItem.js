import React from 'react';
import { ListGroupItem, Collapse, Card, CardBlock, CardTitle, CardSubtitle, CardText, Table} from 'reactstrap';
import {getTypeString} from '../utils/infoFormatHelper';

class MonsterManualItem extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    const {item} = this.props;

    return (
      <div>
      <ListGroupItem onClick={() => { this.toggle(); }}>{item.name}</ListGroupItem>
      <Collapse isOpen={this.state.collapse}>
        <Card>
          <CardBlock>
            <CardTitle>{item.name}</CardTitle>
            <CardSubtitle>{getTypeString(item)}</CardSubtitle>
            <hr />
            <CardText><strong>Armor Class</strong> {item.armor_class}</CardText>
            <CardText><strong>Hit Points</strong> {item.hit_points} {'('+item.hit_dice+')'}</CardText>
            <CardText><strong>Speed</strong> {item.speed}</CardText>
            <hr />
            <Table size="sm">
              <thead>
                <tr>
                  <th>STR</th>
                  <th>DEX</th>
                  <th>CON</th>
                  <th>INT</th>
                  <th>WIS</th>
                  <th>CHA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{item.strength}</td>
                  <td>{item.dexterity}</td>
                  <td>{item.constitution}</td>
                  <td>{item.intelligence}</td>
                  <td>{item.wisdom}</td>
                  <td>{item.charisma}</td>
                </tr>
              </tbody>
            </Table>
            <hr />
            <CardText><strong>Senses</strong> {item.senses}</CardText>
            <CardText><strong>Languages</strong> {item.languages}</CardText>
            <CardText><strong>Challenge</strong> {item.challenge_rating}</CardText>
          </CardBlock>
        </Card>
      </Collapse>
      </div>
    );
  }
}

MonsterManualItem.propTypes = {
  item     : React.PropTypes.object.isRequired
};

export default MonsterManualItem;
