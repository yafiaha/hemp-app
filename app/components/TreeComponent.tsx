import React from "react";

const TreeComponent = () => {
  return (
    <ul>
      <li>
        Parent
        <ul>
          <li>Child 1</li>
          <li>Child 2</li>
          <li>
            Child 3
            <ul>
              <li>Grandchild 1</li>
              <li>Grandchild 2</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default TreeComponent;
