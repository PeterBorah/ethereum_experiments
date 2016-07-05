import "List.sol";

contract ListFactory {
  event Creation(address createdAddress);

  function create() returns(List) {
    List new_list = new List();
    Creation(address(new_list));
    return new_list;
  }
}
