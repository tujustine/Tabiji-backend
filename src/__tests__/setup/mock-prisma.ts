/**
 * Mock Prisma pour les tests unitaires
 * Permet de tester la logique métier sans dépendre de la base de données
 */

export const createMockPrisma = () => {
  const mockData: {
    users: Map<string, any>;
    trips: Map<string, any>;
    userFavoriteTrips: Map<string, any>;
    userRecentTrips: Map<string, any>;
    tripCollaborators: Map<string, any>;
    memories: Map<string, any>;
    shareLinks: Map<string, any>;
    media: Map<string, any>;
    placeData: Map<string, any>;
    daySchedules: Map<string, any>;
    todoItems: Map<string, any>;
  } = {
    users: new Map(),
    trips: new Map(),
    userFavoriteTrips: new Map(),
    userRecentTrips: new Map(),
    tripCollaborators: new Map(),
    memories: new Map(),
    shareLinks: new Map(),
    media: new Map(),
    placeData: new Map(),
    daySchedules: new Map(),
    todoItems: new Map(),
  };

  const generateId = () => `mock-id-${Date.now()}-${Math.random()}`;

  const mockPrisma: any = {
    user: {
      findUnique: jest.fn(async (args: any) => {
        if (args.where.id) {
          return mockData.users.get(args.where.id) || null;
        }
        if (args.where.email) {
          return (
            Array.from(mockData.users.values()).find(
              (u: any) => u.email === args.where.email
            ) || null
          );
        }
        return null;
      }),
      findMany: jest.fn(async () => {
        return Array.from(mockData.users.values());
      }),
      create: jest.fn(async (args: any) => {
        const id = generateId();
        const user = {
          id,
          ...args.data,
          createdAt: new Date(),
          admin: args.data.admin || false,
        };
        mockData.users.set(id, user);
        return user;
      }),
      update: jest.fn(async (args: any) => {
        const user = mockData.users.get(args.where.id);
        if (!user) return null;
        const updated = { ...user, ...args.data };
        mockData.users.set(args.where.id, updated);
        return updated;
      }),
      delete: jest.fn(async (args: any) => {
        mockData.users.delete(args.where.id);
        return { id: args.where.id };
      }),
      deleteMany: jest.fn(async () => {
        mockData.users.clear();
        return { count: 0 };
      }),
      count: jest.fn(async (args?: any) => {
        if (args?.where) {
          let count = 0;
          const users = Array.from(mockData.users.values());
          if (args.where.admin !== undefined) {
            count = users.filter(
              (u: any) => u.admin === args.where.admin
            ).length;
          } else if (args.where.createdAt?.gte) {
            count = users.filter(
              (u: any) => u.createdAt >= args.where.createdAt.gte
            ).length;
          } else if (args.where.tripsOwned?.some) {
            count = users.filter((u: any) =>
              Array.from(mockData.trips.values()).some(
                (t: any) => t.ownerId === u.id
              )
            ).length;
          } else {
            count = users.length;
          }
          return count;
        }
        return mockData.users.size;
      }),
    },
    trip: {
      findUnique: jest.fn(async (args: any) => {
        const trip = mockData.trips.get(args.where.id);
        if (!trip) return null;

        // Simuler les includes
        if (args.include) {
          const result: any = { ...trip };
          if (args.include.owner) {
            result.owner = mockData.users.get(trip.ownerId) || null;
          }
          if (args.include.memories) {
            result.memories = [];
          }
          if (args.include.collaborators) {
            const enrichCollaborator = (c: any) => ({
              ...c,
              user: args.include.collaborators?.include?.user
                ? mockData.users.get(c.userId) || null
                : undefined,
            });
            result.collaborators = Array.from(
              mockData.tripCollaborators.values()
            )
              .filter((c: any) => c.tripId === trip.id)
              .map(enrichCollaborator);
          }
          if (args.include.places) {
            result.places = [];
          }
          if (args.include.todoItems) {
            result.todoItems = [];
          }
          if (args.include.daySchedules) {
            result.daySchedules = [];
          }
          return result;
        }
        return trip;
      }),
      findMany: jest.fn(async (args: any) => {
        let trips = Array.from(mockData.trips.values());

        if (args.where?.OR) {
          const matchesCondition = (trip: any, condition: any): boolean => {
            if (condition.ownerId) return trip.ownerId === condition.ownerId;
            if (condition.collaborators) {
              const collaboratorUserId = condition.collaborators?.some?.userId;
              return Array.from(mockData.tripCollaborators.values()).some(
                (c: any) => c.tripId === trip.id && c.userId === collaboratorUserId
              );
            }
            return false;
          };
          trips = trips.filter((t: any) =>
            args.where.OR.some((condition: any) => matchesCondition(t, condition))
          );
        }

        // Simuler les includes
        if (args.include) {
          trips = trips.map((trip: any) => {
            const result: any = { ...trip };
            if (args.include.owner) {
              result.owner = mockData.users.get(trip.ownerId) || null;
            }
            if (args.include.collaborators) {
              result.collaborators = Array.from(
                mockData.tripCollaborators.values()
              ).filter((c: any) => c.tripId === trip.id);
            }
            if (args.include.places) {
              result.places = [];
            }
            if (args.include.todoItems) {
              result.todoItems = [];
            }
            if (args.include.daySchedules) {
              result.daySchedules = [];
            }
            return result;
          });
        }

        return trips;
      }),
      create: jest.fn(async (args: any) => {
        const id = generateId();
        const trip = {
          id,
          ...args.data,
          createdAt: new Date(),
        };
        mockData.trips.set(id, trip);

        // Simuler les includes
        if (args.include) {
          const result: any = { ...trip };
          if (args.include.owner) {
            result.owner = mockData.users.get(trip.ownerId) || null;
          }
          return result;
        }
        return trip;
      }),
      update: jest.fn(async (args: any) => {
        const trip = mockData.trips.get(args.where.id);
        if (!trip) return null;
        const updated = { ...trip, ...args.data };
        mockData.trips.set(args.where.id, updated);

        if (args.include) {
          const result: any = { ...updated };
          if (args.include.owner) {
            result.owner = mockData.users.get(updated.ownerId) || null;
          }
          return result;
        }
        return updated;
      }),
      delete: jest.fn(async (args: any) => {
        mockData.trips.delete(args.where.id);
        return { id: args.where.id };
      }),
      deleteMany: jest.fn(async () => {
        mockData.trips.clear();
        return { count: 0 };
      }),
      count: jest.fn(async (args?: any) => {
        if (args?.where) {
          let count = 0;
          const trips = Array.from(mockData.trips.values());
          if (args.where.createdAt?.gte) {
            count = trips.filter(
              (t: any) => t.createdAt >= args.where.createdAt.gte
            ).length;
          } else if (args.where.memories?.some) {
            const tripIdsWithMemories = new Set(
              Array.from(mockData.memories.values()).map((m: any) => m.tripId)
            );
            count = trips.filter((t: any) => tripIdsWithMemories.has(t.id)).length;
          } else if (args.where.places?.some) {
            const tripIdsWithPlaces = new Set(
              Array.from(mockData.placeData.values()).map((p: any) => p.tripId)
            );
            count = trips.filter((t: any) => tripIdsWithPlaces.has(t.id)).length;
          } else {
            count = trips.length;
          }
          return count;
        }
        return mockData.trips.size;
      }),
    },
    userFavoriteTrip: {
      findUnique: jest.fn(async (args: any) => {
        const key = `${args.where.userId_tripId.userId}-${args.where.userId_tripId.tripId}`;
        return mockData.userFavoriteTrips.get(key) || null;
      }),
      findMany: jest.fn(async (args: any) => {
        return Array.from(mockData.userFavoriteTrips.values()).filter(
          (f: any) => !args.where || f.userId === args.where.userId
        );
      }),
      create: jest.fn(async (args: any) => {
        const key = `${args.data.userId}-${args.data.tripId}`;
        const favorite = {
          id: generateId(),
          ...args.data,
        };
        mockData.userFavoriteTrips.set(key, favorite);
        return favorite;
      }),
      delete: jest.fn(async (args: any) => {
        const key = `${args.where.userId_tripId.userId}-${args.where.userId_tripId.tripId}`;
        mockData.userFavoriteTrips.delete(key);
        return { id: args.where.userId_tripId.tripId };
      }),
      deleteMany: jest.fn(async () => {
        mockData.userFavoriteTrips.clear();
        return { count: 0 };
      }),
    },
    userRecentTrip: {
      findUnique: jest.fn(async (args: any) => {
        const key = `${args.where.userId_tripId.userId}-${args.where.userId_tripId.tripId}`;
        return mockData.userRecentTrips.get(key) || null;
      }),
      findMany: jest.fn(async (args: any) => {
        let recentTrips = Array.from(mockData.userRecentTrips.values());
        if (args.where) {
          recentTrips = recentTrips.filter(
            (rt: any) => rt.userId === args.where.userId
          );
        }
        if (args.orderBy) {
          recentTrips.sort((a: any, b: any) => {
            const field = Object.keys(args.orderBy)[0];
            const direction = args.orderBy[field] === "desc" ? -1 : 1;
            return (a[field] > b[field] ? 1 : -1) * direction;
          });
        }
        if (args.take) {
          recentTrips = recentTrips.slice(0, args.take);
        }
        return recentTrips;
      }),
      create: jest.fn(async (args: any) => {
        const key = `${args.data.userId}-${args.data.tripId}`;
        const recentTrip = {
          id: generateId(),
          ...args.data,
          viewedAt: args.data.viewedAt || new Date(),
        };
        mockData.userRecentTrips.set(key, recentTrip);
        return recentTrip;
      }),
      upsert: jest.fn(async (args: any) => {
        const key = `${args.where.userId_tripId.userId}-${args.where.userId_tripId.tripId}`;
        const existing = mockData.userRecentTrips.get(key);
        if (existing) {
          const updated = { ...existing, ...args.update };
          mockData.userRecentTrips.set(key, updated);
          return updated;
        } else {
          const created = {
            id: generateId(),
            userId: args.where.userId_tripId.userId,
            tripId: args.where.userId_tripId.tripId,
            ...args.create,
          };
          mockData.userRecentTrips.set(key, created);
          return created;
        }
      }),
      delete: jest.fn(async (args: any) => {
        const key = `${args.where.userId_tripId.userId}-${args.where.userId_tripId.tripId}`;
        mockData.userRecentTrips.delete(key);
        return { id: args.where.userId_tripId.tripId };
      }),
      deleteMany: jest.fn(async (args: any) => {
        if (args.where?.id?.in) {
          const idsToDelete = args.where.id.in;
          let count = 0;
          for (const [key, rt] of mockData.userRecentTrips.entries()) {
            if (idsToDelete.includes(rt.id)) {
              mockData.userRecentTrips.delete(key);
              count++;
            }
          }
          return { count };
        }
        mockData.userRecentTrips.clear();
        return { count: 0 };
      }),
    },
    tripCollaborator: {
      findUnique: jest.fn(async (args: any) => {
        const key = `${args.where.userId_tripId.userId}-${args.where.userId_tripId.tripId}`;
        return mockData.tripCollaborators.get(key) || null;
      }),
      findMany: jest.fn(async (args: any) => {
        let collaborators = Array.from(mockData.tripCollaborators.values());
        if (args.where) {
          if (args.where.tripId) {
            collaborators = collaborators.filter(
              (c: any) => c.tripId === args.where.tripId
            );
          }
          if (args.where.userId) {
            collaborators = collaborators.filter(
              (c: any) => c.userId === args.where.userId
            );
          }
        }
        if (args.include) {
          collaborators = collaborators.map((c: any) => {
            const result: any = { ...c };
            if (args.include.user) {
              result.user = mockData.users.get(c.userId) || null;
            }
            return result;
          });
        }
        return collaborators;
      }),
      create: jest.fn(async (args: any) => {
        const key = `${args.data.userId}-${args.data.tripId}`;
        const collaborator = {
          id: generateId(),
          ...args.data,
        };
        mockData.tripCollaborators.set(key, collaborator);

        if (args.include) {
          const result: any = { ...collaborator };
          if (args.include.user) {
            result.user = mockData.users.get(collaborator.userId) || null;
          }
          if (args.include.trip) {
            result.trip = mockData.trips.get(collaborator.tripId) || null;
          }
          return result;
        }
        return collaborator;
      }),
      update: jest.fn(async (args: any) => {
        const key = `${args.where.userId_tripId.userId}-${args.where.userId_tripId.tripId}`;
        const collaborator = mockData.tripCollaborators.get(key);
        if (!collaborator) return null;
        const updated = { ...collaborator, ...args.data };
        mockData.tripCollaborators.set(key, updated);

        if (args.include) {
          const result: any = { ...updated };
          if (args.include.user) {
            result.user = mockData.users.get(updated.userId) || null;
          }
          return result;
        }
        return updated;
      }),
      delete: jest.fn(async (args: any) => {
        const key = `${args.where.userId_tripId.userId}-${args.where.userId_tripId.tripId}`;
        mockData.tripCollaborators.delete(key);
        return { id: args.where.userId_tripId.tripId };
      }),
      deleteMany: jest.fn(async (args: any) => {
        if (args.where) {
          let count = 0;
          for (const [key, c] of mockData.tripCollaborators.entries()) {
            if (args.where.tripId && c.tripId === args.where.tripId) {
              mockData.tripCollaborators.delete(key);
              count++;
            }
          }
          return { count };
        }
        mockData.tripCollaborators.clear();
        return { count: 0 };
      }),
      count: jest.fn(async () => {
        return mockData.tripCollaborators.size;
      }),
    },
    memory: {
      findUnique: jest.fn(async (args: any) => {
        const memory = mockData.memories.get(args.where.id);
        if (!memory) return null;

        // Simuler les includes
        if (args.include) {
          const result: any = { ...memory };
          if (args.include.media) {
            result.media = Array.from(mockData.media.values()).filter(
              (m: any) => m.memoryId === memory.id
            );
          }
          if (args.include.trip) {
            result.trip = mockData.trips.get(memory.tripId) || null;
          }
          return result;
        }
        return memory;
      }),
      findMany: jest.fn(async (args: any) => {
        let memories = Array.from(mockData.memories.values());

        // Filtrer par tripId si fourni
        if (args.where?.tripId) {
          memories = memories.filter(
            (m: any) => m.tripId === args.where.tripId
          );
        }

        // Trier si orderBy fourni
        if (args.orderBy) {
          const field = Object.keys(args.orderBy)[0];
          const direction = args.orderBy[field] === "desc" ? -1 : 1;
          memories.sort((a, b) => {
            const aVal = a[field];
            const bVal = b[field];
            if (aVal > bVal) return 1 * direction;
            if (aVal < bVal) return -1 * direction;
            return 0;
          });
        }

        // Inclure media si demandé
        if (args.include?.media) {
          const enrichMemoryWithMedia = (m: any) => ({
            ...m,
            media: Array.from(mockData.media.values()).filter(
              (med: any) => med.memoryId === m.id
            ),
          });
          memories = memories.map(enrichMemoryWithMedia);
        }

        return memories;
      }),
      create: jest.fn(async (args: any) => {
        const id = generateId();
        const memory = {
          id,
          ...args.data,
          createdAt: new Date(),
          updatedAt: new Date(),
          zIndex: args.data.zIndex || 0,
        };
        mockData.memories.set(id, memory);

        // Inclure media si demandé
        if (args.include?.media) {
          return {
            ...memory,
            media: [],
          };
        }
        return memory;
      }),
      update: jest.fn(async (args: any) => {
        const memory = mockData.memories.get(args.where.id);
        if (!memory) return null;
        const updated = { ...memory, ...args.data, updatedAt: new Date() };
        mockData.memories.set(args.where.id, updated);

        if (args.include?.media) {
          return {
            ...updated,
            media: Array.from(mockData.media.values()).filter(
              (m: any) => m.memoryId === updated.id
            ),
          };
        }
        return updated;
      }),
      delete: jest.fn(async (args: any) => {
        mockData.memories.delete(args.where.id);
        return { id: args.where.id };
      }),
      deleteMany: jest.fn(async (args: any) => {
        if (args.where) {
          let count = 0;
          for (const [key, m] of mockData.memories.entries()) {
            if (args.where.tripId && m.tripId === args.where.tripId) {
              mockData.memories.delete(key);
              count++;
            }
          }
          return { count };
        }
        mockData.memories.clear();
        return { count: 0 };
      }),
      count: jest.fn(async () => {
        return mockData.memories.size;
      }),
    },
    shareLink: {
      findUnique: jest.fn(async (args: any) => {
        let shareLink: any = null;
        if (args.where.id) {
          shareLink = mockData.shareLinks.get(args.where.id) || null;
        } else if (args.where.token) {
          shareLink =
            Array.from(mockData.shareLinks.values()).find(
              (sl: any) => sl.token === args.where.token
            ) || null;
        }
        if (!shareLink) return null;
        if (args.include?.trip) {
          const result: any = { ...shareLink };
          result.trip = mockData.trips.get(shareLink.tripId) || null;
          if (result.trip && args.include.trip.include?.owner) {
            result.trip = {
              ...result.trip,
              owner:
                mockData.users.get(result.trip.ownerId) || null,
            };
          }
          return result;
        }
        return shareLink;
      }),
      findMany: jest.fn(async (args: any) => {
        let shareLinks = Array.from(mockData.shareLinks.values());

        // Filtrer par tripId si fourni
        if (args.where?.tripId) {
          shareLinks = shareLinks.filter(
            (sl: any) => sl.tripId === args.where.tripId
          );
        }

        // Trier si orderBy fourni
        if (args.orderBy) {
          const field = Object.keys(args.orderBy)[0];
          const direction = args.orderBy[field] === "desc" ? -1 : 1;
          shareLinks.sort((a, b) => {
            const aVal = a[field];
            const bVal = b[field];
            if (aVal > bVal) return 1 * direction;
            if (aVal < bVal) return -1 * direction;
            return 0;
          });
        }

        // Inclure trip si demandé
        if (args.include?.trip) {
          const enrichShareLinkWithTrip = (sl: any): any => {
            const result: any = { ...sl };
            result.trip = mockData.trips.get(sl.tripId) || null;
            if (result.trip && args.include.trip.include?.owner) {
              result.trip.owner =
                mockData.users.get(result.trip.ownerId) || null;
            }
            return result;
          };
          shareLinks = shareLinks.map(enrichShareLinkWithTrip);
        }

        return shareLinks;
      }),
      create: jest.fn(async (args: any) => {
        const id = generateId();
        const shareLink = {
          id,
          ...args.data,
          createdAt: new Date(),
          scope: args.data.scope || "memories:read",
          role: args.data.role || "VIEWER",
        };
        mockData.shareLinks.set(id, shareLink);
        return shareLink;
      }),
      update: jest.fn(async (args: any) => {
        const shareLink = mockData.shareLinks.get(args.where.id);
        if (!shareLink) return null;
        const updated = { ...shareLink, ...args.data };
        mockData.shareLinks.set(args.where.id, updated);
        return updated;
      }),
      delete: jest.fn(async (args: any) => {
        mockData.shareLinks.delete(args.where.id);
        return { id: args.where.id };
      }),
      deleteMany: jest.fn(async (args: any) => {
        if (args.where) {
          let count = 0;
          for (const [key, sl] of mockData.shareLinks.entries()) {
            if (args.where.tripId && sl.tripId === args.where.tripId) {
              mockData.shareLinks.delete(key);
              count++;
            }
          }
          return { count };
        }
        mockData.shareLinks.clear();
        return { count: 0 };
      }),
    },
    media: {
      findUnique: jest.fn(async (args: any) => {
        return mockData.media.get(args.where.id) || null;
      }),
      findMany: jest.fn(async (args: any) => {
        let media = Array.from(mockData.media.values());

        // Filtrer par memoryId si fourni
        if (args.where?.memoryId) {
          media = media.filter((m: any) => m.memoryId === args.where.memoryId);
        }

        return media;
      }),
      create: jest.fn(async (args: any) => {
        const id = generateId();
        const media = {
          id,
          ...args.data,
          createdAt: new Date(),
        };
        mockData.media.set(id, media);
        return media;
      }),
      delete: jest.fn(async (args: any) => {
        mockData.media.delete(args.where.id);
        return { id: args.where.id };
      }),
      deleteMany: jest.fn(async (args: any) => {
        if (args.where) {
          let count = 0;
          for (const [key, m] of mockData.media.entries()) {
            if (args.where.memoryId && m.memoryId === args.where.memoryId) {
              mockData.media.delete(key);
              count++;
            }
          }
          return { count };
        }
        mockData.media.clear();
        return { count: 0 };
      }),
      count: jest.fn(async () => {
        return mockData.media.size;
      }),
    },
    placeData: {
      findUnique: jest.fn(async (args: any) => {
        return mockData.placeData.get(args.where.id) || null;
      }),
      findMany: jest.fn(async (args: any) => {
        let places = Array.from(mockData.placeData.values());

        // Filtrer par tripId si fourni
        if (args.where?.tripId) {
          places = places.filter((p: any) => p.tripId === args.where.tripId);
        }

        return places;
      }),
      create: jest.fn(async (args: any) => {
        const id = generateId();
        const place = {
          id,
          ...args.data,
          createdAt: new Date(),
        };
        mockData.placeData.set(id, place);
        return place;
      }),
      update: jest.fn(async (args: any) => {
        const place = mockData.placeData.get(args.where.id);
        if (!place) return null;
        const updated = { ...place, ...args.data };
        mockData.placeData.set(args.where.id, updated);
        return updated;
      }),
      delete: jest.fn(async (args: any) => {
        mockData.placeData.delete(args.where.id);
        return { id: args.where.id };
      }),
      deleteMany: jest.fn(async (args: any) => {
        if (args.where) {
          let count = 0;
          for (const [key, p] of mockData.placeData.entries()) {
            if (args.where.tripId && p.tripId === args.where.tripId) {
              mockData.placeData.delete(key);
              count++;
            }
          }
          return { count };
        }
        mockData.placeData.clear();
        return { count: 0 };
      }),
      count: jest.fn(async () => {
        return mockData.placeData.size;
      }),
    },
    daySchedule: {
      findUnique: jest.fn(async (args: any) => {
        return mockData.daySchedules.get(args.where.id) || null;
      }),
      findMany: jest.fn(async (args: any) => {
        let schedules = Array.from(mockData.daySchedules.values());

        // Filtrer par tripId si fourni
        if (args.where?.tripId) {
          schedules = schedules.filter(
            (s: any) => s.tripId === args.where.tripId
          );
        }

        // Trier si orderBy fourni
        if (args.orderBy) {
          const field = Object.keys(args.orderBy)[0];
          const direction = args.orderBy[field] === "desc" ? -1 : 1;
          schedules.sort((a, b) => {
            const aVal = a[field];
            const bVal = b[field];
            if (aVal > bVal) return 1 * direction;
            if (aVal < bVal) return -1 * direction;
            return 0;
          });
        }

        return schedules;
      }),
      create: jest.fn(async (args: any) => {
        const id = generateId();
        const schedule = {
          id,
          ...args.data,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        mockData.daySchedules.set(id, schedule);
        return schedule;
      }),
      createMany: jest.fn(async (args: any) => {
        const count = args.data.length;
        args.data.forEach((data: any) => {
          const id = generateId();
          const schedule = {
            id,
            ...data,
            createdAt: new Date(),
            updatedAt: new Date(),
          };
          mockData.daySchedules.set(id, schedule);
        });
        return { count };
      }),
      update: jest.fn(async (args: any) => {
        const schedule = mockData.daySchedules.get(args.where.id);
        if (!schedule) return null;
        const updated = { ...schedule, ...args.data, updatedAt: new Date() };
        mockData.daySchedules.set(args.where.id, updated);
        return updated;
      }),
      delete: jest.fn(async (args: any) => {
        mockData.daySchedules.delete(args.where.id);
        return { id: args.where.id };
      }),
      deleteMany: jest.fn(async (args: any) => {
        if (args.where) {
          let count = 0;
          for (const [key, s] of mockData.daySchedules.entries()) {
            if (args.where.tripId && s.tripId === args.where.tripId) {
              mockData.daySchedules.delete(key);
              count++;
            }
          }
          return { count };
        }
        mockData.daySchedules.clear();
        return { count: 0 };
      }),
    },
    todoItem: {
      findUnique: jest.fn(async (args: any) => {
        return mockData.todoItems.get(args.where.id) || null;
      }),
      findMany: jest.fn(async (args: any) => {
        let todos = Array.from(mockData.todoItems.values());

        // Filtrer par tripId si fourni
        if (args.where?.tripId) {
          todos = todos.filter((t: any) => t.tripId === args.where.tripId);
        }

        // Trier si orderBy fourni
        if (args.orderBy) {
          const field = Object.keys(args.orderBy)[0];
          const direction = args.orderBy[field] === "desc" ? -1 : 1;
          todos.sort((a, b) => {
            const aVal = a[field];
            const bVal = b[field];
            if (aVal > bVal) return 1 * direction;
            if (aVal < bVal) return -1 * direction;
            return 0;
          });
        }

        return todos;
      }),
      create: jest.fn(async (args: any) => {
        const id = generateId();
        const todo = {
          id,
          ...args.data,
          completed: args.data.completed || false,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        mockData.todoItems.set(id, todo);
        return todo;
      }),
      createMany: jest.fn(async (args: any) => {
        const count = args.data.length;
        args.data.forEach((data: any) => {
          const id = generateId();
          const todo = {
            id,
            ...data,
            completed: data.completed || false,
            createdAt: new Date(),
            updatedAt: new Date(),
          };
          mockData.todoItems.set(id, todo);
        });
        return { count };
      }),
      update: jest.fn(async (args: any) => {
        const todo = mockData.todoItems.get(args.where.id);
        if (!todo) return null;
        const updated = { ...todo, ...args.data, updatedAt: new Date() };
        mockData.todoItems.set(args.where.id, updated);
        return updated;
      }),
      delete: jest.fn(async (args: any) => {
        mockData.todoItems.delete(args.where.id);
        return { id: args.where.id };
      }),
      deleteMany: jest.fn(async (args: any) => {
        if (args.where) {
          let count = 0;
          for (const [key, t] of mockData.todoItems.entries()) {
            if (args.where.tripId && t.tripId === args.where.tripId) {
              mockData.todoItems.delete(key);
              count++;
            }
          }
          return { count };
        }
        mockData.todoItems.clear();
        return { count: 0 };
      }),
    },
    $transaction: jest.fn(async (callback: any) => {
      return await callback(mockPrisma);
    }),
    $disconnect: jest.fn(async () => {}),
  };

  // Fonction pour réinitialiser les données mockées
  const resetMockData = () => {
    mockData.users.clear();
    mockData.trips.clear();
    mockData.userFavoriteTrips.clear();
    mockData.userRecentTrips.clear();
    mockData.tripCollaborators.clear();
    mockData.memories.clear();
    mockData.shareLinks.clear();
    mockData.media.clear();
    mockData.placeData.clear();
    mockData.daySchedules.clear();
    mockData.todoItems.clear();
  };

  // Fonction pour ajouter des données de test
  const seedMockData = (data: {
    users?: any[];
    trips?: any[];
    userFavoriteTrips?: any[];
    userRecentTrips?: any[];
    tripCollaborators?: any[];
    memories?: any[];
    shareLinks?: any[];
    media?: any[];
    placeData?: any[];
    daySchedules?: any[];
    todoItems?: any[];
  }): void => {
    if (data.users) {
      data.users.forEach((user) => {
        mockData.users.set(user.id, user);
      });
    }
    if (data.trips) {
      data.trips.forEach((trip) => {
        mockData.trips.set(trip.id, trip);
      });
    }
    if (data.userFavoriteTrips) {
      data.userFavoriteTrips.forEach((fav) => {
        const key = `${fav.userId}-${fav.tripId}`;
        mockData.userFavoriteTrips.set(key, fav);
      });
    }
    if (data.userRecentTrips) {
      data.userRecentTrips.forEach((rt) => {
        const key = `${rt.userId}-${rt.tripId}`;
        mockData.userRecentTrips.set(key, rt);
      });
    }
    if (data.tripCollaborators) {
      data.tripCollaborators.forEach((c) => {
        const key = `${c.userId}-${c.tripId}`;
        mockData.tripCollaborators.set(key, c);
      });
    }
    if (data.memories) {
      data.memories.forEach((memory) => {
        mockData.memories.set(memory.id, memory);
      });
    }
    if (data.shareLinks) {
      data.shareLinks.forEach((shareLink) => {
        mockData.shareLinks.set(shareLink.id, shareLink);
      });
    }
    if (data.media) {
      data.media.forEach((media) => {
        mockData.media.set(media.id, media);
      });
    }
    if (data.placeData) {
      data.placeData.forEach((place) => {
        mockData.placeData.set(place.id, place);
      });
    }
    if (data.daySchedules) {
      data.daySchedules.forEach((schedule) => {
        mockData.daySchedules.set(schedule.id, schedule);
      });
    }
    if (data.todoItems) {
      data.todoItems.forEach((todo) => {
        mockData.todoItems.set(todo.id, todo);
      });
    }
  };

  return {
    mockPrisma,
    resetMockData,
    seedMockData,
    mockData,
  };
};
