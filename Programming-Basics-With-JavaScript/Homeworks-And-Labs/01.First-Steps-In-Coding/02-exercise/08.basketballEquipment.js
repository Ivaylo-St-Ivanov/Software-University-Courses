function basketballEquipment(input) {

    const fee = Number(input[0]);

    const sneakersPrice = fee * 0.6;
    const outfitPrice = sneakersPrice * 0.8;
    const ballPrice = outfitPrice / 4;
    const accessoriesPrice = ballPrice / 5;
    const totalSum = sneakersPrice + outfitPrice + ballPrice + accessoriesPrice + fee;

    console.log(totalSum);

}
basketballEquipment(["550"]);