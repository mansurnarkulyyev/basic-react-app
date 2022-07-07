import React from 'react';
// import st from
import MySelect from '../Ui/MySelect/MySelect'
import MyInput from '../Ui/Input/MyInput';

const PostFilter = ({ filter, setFilter }) => {
    return (
        <div>

            <MyInput
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })}
                placeholder="Search..." />


            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                defaultValue="sort"
                options={[
                    { value: 'title', name: ' by name' },
                    { value: 'body', name: ' by description' },
                ]}
            />
        </div>
    );
};
export default PostFilter;