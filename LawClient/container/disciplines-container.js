import DisciplineList from "../component/DisciplineList"
import {connect} from 'react-redux'

const mapStateToProps = state => {
    return {
        disciplines: state.disciplines
    }
};

export default connect(mapStateToProps) (DisciplineList);