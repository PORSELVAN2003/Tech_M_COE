package genrics_ex;

import java.util.List;

public class FindTarget<T> {
	private List<T> Findlist;
	private T target;

	public FindTarget(List<T> Findlist, T target) {
		this.Findlist = Findlist;
		this.target = target;

	}

	public int gettarget() {

		for (int i = 0; i < Findlist.size(); i++) {
			if (Findlist.get(i).equals(target)) {
				return i;
			}

		}
		return 0;

	}

	public static void main(String[] args) {
		List<Integer> numbers = List.of(10, 20, 32, 12);
		FindTarget<Integer> implist = new FindTarget<>(numbers, 32);

		System.out.println(implist.gettarget());

	}

}
