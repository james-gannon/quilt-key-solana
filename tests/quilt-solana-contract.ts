import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { QuiltSolanaContract } from "../target/types/quilt_solana_contract";

const assert = require("assert");
const anchor = require("@project-serum/anchor");
const { SystemProgram } = anchor.web3;

describe("quilt-solana-contract", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.QuiltSolanaContract as Program<QuiltSolanaContract>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
