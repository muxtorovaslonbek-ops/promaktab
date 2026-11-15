import { describe, expect, it } from "vitest";
import { periodicElements, categoryMeta } from "@/data/periodicTable";
import { subjectsData, subjectsOrder } from "@/data/subjects";

describe("Darslar va Davriy jadval ma'lumotlari", () => {
  it("contains all 118 chemical elements with unique atomic numbers and grid coordinates", () => {
    expect(periodicElements).toHaveLength(118);

    const coords = new Set<string>();
    const symbols = new Set<string>();

    periodicElements.forEach((el, index) => {
      expect(el.number).toBe(index + 1);
      expect(el.symbol.length).toBeGreaterThan(0);
      expect(el.nameUz.length).toBeGreaterThan(0);
      expect(categoryMeta[el.category]).toBeDefined();

      const coordKey = `${el.row}-${el.col}`;
      expect(coords.has(coordKey)).toBe(false);
      coords.add(coordKey);

      expect(symbols.has(el.symbol)).toBe(false);
      symbols.add(el.symbol);
    });
  });

  it("includes expanded lessons, references, exercises, quizzes and glossary for all 5 subjects", () => {
    expect(subjectsOrder).toEqual(["matematika", "kimyo", "fizika", "biologiya", "tarix"]);

    for (const id of subjectsOrder) {
      const subject = subjectsData[id];
      expect(subject).toBeDefined();
      if (!subject) continue;

      expect(subject.lessons).toHaveLength(10);
      expect(subject.references.length).toBeGreaterThanOrEqual(15);
      expect(subject.exercises).toHaveLength(6);
      expect(subject.quizzes).toHaveLength(12);
      expect(subject.glossary).toHaveLength(14);

      expect(subject.stats.lessons).toBe(subject.lessons.length);
      expect(subject.stats.references).toBe(subject.references.length);
      expect(subject.stats.quizzes).toBe(subject.quizzes.length);
    }
  });
});
