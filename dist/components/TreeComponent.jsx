"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const TreeComponent = () => {
    return (<ul>
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
    </ul>);
};
exports.default = TreeComponent;
