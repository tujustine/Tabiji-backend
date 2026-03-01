/**
 * Mocks pour les tests d'intégration.
 * Doit être chargé en premier (setupFiles) pour que les modules soient mockés
 * avant l'import de l'app.
 */

jest.mock("../../socket/io", () => ({
  getIO: () => ({
    to: () => ({
      emit: () => {},
    }),
  }),
  setIO: () => {},
}));
