const BaseServices = require("../base/BaseServices");
const PemasokConstants = require("./PemasokConstants");
const PemasokServices = {};

PemasokServices.create = async (
  kodePemasok,
  namaPemasok,
  alamatPemasok,
  teleponPemasok
) => {
  const data = {
    kodePemasok,
    namaPemasok,
    alamatPemasok,
    teleponPemasok,
  };

  await BaseServices.queryBuilder(PemasokConstants.TABLE).insert(data);

  return data;
};

PemasokServices.fetchAll = async (terms, page) => {
  const queryBuilder = BaseServices.queryBuilder(PemasokConstants.TABLE);

  if (terms) {
    queryBuilder
      .whereILike("kodePemasok", `%${terms}%`)
      .orWhereILike("namaPemasok", `%${terms}%`)
      .orWhereILike("namaPemasok", `%${terms}%`);
  }

  return {
    ...BaseServices(await BaseServices.paginator(page, queryBuilder)),
    terms: terms ? terms : "",
  };
};

PemeasokService.fetch = async (kodePemasok) => {
  return (
    await BaseServices.queryBuilder(PemasokConstants.TABLE).where({
      kodePemasok,
    })
  )[0];
};

PemasokServices.edit = async (
  kodePemasok,
  namaPemasok,
  alamatPemasok,
  teleponPemasok
) => {
  const data = {
    namaPemasok,
    alamatPemasok,
    teleponPemasok,
  };

  await BaseServices.queryBuilder(PemasokConstants.TABLE)
    .where({ kodePemasok })
    .update(data);

  return { kodePemasok, ...data };
};

PemasokServices.delete = async (kodePemasok) => {
  await BaseServices.queryBuilder(PemasokConstants.TABLE)
    .where({ kodePemasok })
    .del();
  return null;
};

module.exports = PemasokServices;
