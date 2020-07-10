import React from 'react';
import Spinner from "../../../Spinner";

interface AwaitedContentProps {
    isFetching: boolean
    render: () => JSX.Element
}

const AwaitedContent = ({ isFetching, render }: AwaitedContentProps) => {
    return isFetching ? <Spinner/> : render();
};

export default AwaitedContent;
