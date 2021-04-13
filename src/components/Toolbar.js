import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

function Toolbar(props) {
    return (
        <div className='toolbar'>
            <Button onClick={props.generateMaze}>Create Maze</Button>
            <Button onClick={props.clearGrid}>Clear</Button>
            <Button onClick={props.pickRandomStart}>Pick Start</Button>
            <Button onClick={props.pickRandomEnd}>Pick Goal</Button>
            <DropdownButton title='Algo'>
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
