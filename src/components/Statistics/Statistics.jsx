import PropTypes from 'prop-types';
import { SectionStatistics, Title, List, ListItem, Label, Percentage } from './Statistics.styled';
import { getRandomHexColor } from '../Utils';


export const Statistics = ({title, stats}) =>
(<SectionStatistics>
    {title && <Title>{title}</Title>
}
    <List>
        {stats.map(({ label, percentage, id }) => (
        <ListItem key={id} backgroundColor={getRandomHexColor} >
            <Label>{ label }</Label>
            <Percentage>{ percentage + '%' }</Percentage>
        </ListItem>))}
    </List>
</SectionStatistics>);

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        id: PropTypes.string,
        percentage:PropTypes.number
    })).isRequired,
}

