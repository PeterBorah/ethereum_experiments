import "./RecurserChild.sol";

contract Recurser {
  RecurserChild child;

  function Recurser() {
    RecurserChild child_1 = new RecurserChild();
    RecurserChild child_2 = new RecurserChild();

    child_1.setOther(child_2);
    child_2.setOther(child_1);
    child = child_1;
  }

  function recurse(uint[] list) returns(uint) {
    return child.recurse(list[0], 1, list);
  }

}
