// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class RankClaimedEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RankClaimedEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type RankClaimedEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("RankClaimedEntity", id.toString(), this);
    }
  }

  static load(id: string): RankClaimedEntity | null {
    return changetype<RankClaimedEntity | null>(
      store.get("RankClaimedEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user_address(): Bytes {
    let value = this.get("user_address");
    return value!.toBytes();
  }

  set user_address(value: Bytes) {
    this.set("user_address", Value.fromBytes(value));
  }

  get mint_term(): BigInt {
    let value = this.get("mint_term");
    return value!.toBigInt();
  }

  set mint_term(value: BigInt) {
    this.set("mint_term", Value.fromBigInt(value));
  }

  get mint_rank(): BigInt {
    let value = this.get("mint_rank");
    return value!.toBigInt();
  }

  set mint_rank(value: BigInt) {
    this.set("mint_rank", Value.fromBigInt(value));
  }
}
