import React from 'ract';
import propTypes from 'prop-types';

GetList.propTypes = {
    studentsList: PropTypes.array,
};
GetList.defaultProps = {
    studentList: [],
};

function GetList(props) {
    const { studentList } = props;
    return (
        <ul className="post-list">

           {studentList.map(post => (
           <li key={post.id}>{post.name} age {post.age} </li>
           ))}

        </ul>



    )
}
