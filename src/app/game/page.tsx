"use client";

import { useReducer } from "react";
import animalsData from "../data/animals.json";

// Conceptual round keys for the four stages of the game
const ROUND_ORDER = ["silhouette", "diet", "population", "lifespan"] as const;

const INITIAL_QUESTIONS_STATE = {
  silhouette: {
    answer: null,
    isCorrect: null,
    extra: {
      similarityScore: null,
    },
  },
  diet: {
    answer: null,
    isCorrect: null,
    extra: {},
  },
  population: {
    answer: null,
    isCorrect: null,
    extra: {},
  },
  lifespan: {
    answer: null,
    isCorrect: null,
    extra: {},
  },
};

const INITIAL_STATE = {
  currentRound: "silhouette",
  currentAnimalIndex: 0,
  questions: INITIAL_QUESTIONS_STATE,
  funFactUnlocked: false,
};

function gameReducer(state, action) {
  switch (action.type) {
    case "GUESS_SILHOUETTE": {
      // TODO: compute similarity score and set silhouette answer + correctness
      return state;
    }
    case "ANSWER_DIET": {
      // TODO: record selected diet option and correctness
      return state;
    }
    case "ANSWER_POPULATION": {
      // TODO: record selected population option and correctness
      return state;
    }
    case "ANSWER_LIFESPAN": {
      // TODO: record selected lifespan option and correctness
      return state;
    }
    case "GO_TO_NEXT_ROUND": {
      // TODO: move currentRound to the next value in ROUND_ORDER
      return state;
    }
    case "CHECK_FUN_FACT_UNLOCK": {
      // TODO: set funFactUnlocked based on all rounds being correct
      return state;
    }
    case "RESET_GAME": {
      // TODO: reset state (and optionally advance to the next animal)
      return INITIAL_STATE;
    }
    default: {
      return state;
    }
  }
}

export default function GamePage() {
  const [state, dispatch] = useReducer(gameReducer, INITIAL_STATE);

  // For now, we only initialize state; UI will be added later.
  // Prevent unused variable warnings until we wire these into the UI.
  void state;
  void dispatch;
  void animalsData;

  return null;
}

