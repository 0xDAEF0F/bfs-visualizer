import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

function Toolbar(props) {
    return (
        <div className='toolbar'>
            <Button size="sm" onClick={props.generateMaze}>Create Maze</Button>
            <Button size="sm" onClick={props.clearGrid}>Clear</Button>
            <Button size="sm" onClick={props.pickRandomStart}>Pick Start</Button>

            <Button size="sm" onClick={props.pickRandomEnd}>Pick Goal</Button>

            <DropdownButton size="sm" title='Algo'>
                <Dropdown.Item onClick={props.startBfs}>Breadth First Search</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Coming Soon</Dropdown.Header>
                <Dropdown.Item className='disabled'>Depth First Search</Dropdown.Item>
                <Dropdown.Item className='disabled'>Djistra's</Dropdown.Item>
                <Dropdown.Item className='disabled'>A*</Dropdown.Item>
            </DropdownButton>
        </div>
    )
}

export default Toolbar
