import { useLayoutEffect } from "@tanstack/react-router";

const useMetaDocument = (title?: string) => {
  useLayoutEffect(() => {
    document.title = `Nerdflow | ${title}`;
  }, [title]);

  return { title: `Nerdflow | ${title}` };
};

export default useMetaDocument;
