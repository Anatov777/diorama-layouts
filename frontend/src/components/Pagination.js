import React from "react";
import ReactNextPaging from "react-next-paging";

const buttonStyles = {
  border: "1px solid #ccc",
  background: "#fff",
  fontSize: "1em",
  padding: 0,
  margin: 5,
  width: 30,
  height: 20,
  textAlign : 'center',
  
};

const PaginacionTabla = ({ itemsperpage, nocolumns, items, pagesspan }) => {
  return (
    <ReactNextPaging
      itemsperpage={itemsperpage}
      nocolumns={nocolumns}
      items={items}
      pagesspan={pagesspan}
    >
      {({
        getBackButtonProps,
        getFastBackButtonProps,
        getFwdButtonProps,
        getFastFwdButtonProps,
        getSelPageButtonProps,
        nopages,
        inipagearray,
        pagesforarray,
        currentpage,
        noitems,
        initialitem,
        lastitem,
        goBackBdisabled,
        goFastBackBdisabled,
        goFwdBdisabled,
        goFastFwdBdisabled
      }) => (
        <tbody>
          <tr className="row">
            {items.slice(initialitem, lastitem).map((item, index) => {
              return item;
            })}
          </tr>
          {noitems > 0
            ? [
                <tr key={"pagingrow" + 100}>
                  <td colSpan={nocolumns} style={{ textAlign: "center" }}>
                    <button
                      style={buttonStyles}
                      {...getFastBackButtonProps()}
                      disabled={goFastBackBdisabled}
                    >
                      {"<<"}
                    </button>
                    <button
                      style={buttonStyles}
                      {...getBackButtonProps()}
                      disabled={goBackBdisabled}
                    >
                      {"<"}
                    </button>
                    {Array.from(
                      { length: pagesforarray },
                      (v, i) => i + inipagearray
                    ).map(page => {
                      return (
                        <a href="#dioramas" key={page}>
                          <button
                            
                            {...getSelPageButtonProps({ page: page })}
                            disabled={currentpage === page}
                          >
                            {page}
                          </button>
                        </a>
                      );
                    })}
                    <button
                      style={buttonStyles}
                      {...getFwdButtonProps()}
                      disabled={goFwdBdisabled}
                    >
                      {">"}
                    </button>
                    <button
                      style={buttonStyles}
                      {...getFastFwdButtonProps()}
                      disabled={goFastFwdBdisabled}
                    >
                      {">>"}
                    </button>
                  </td>
                </tr>
              ]
            : null}
        </tbody>
      )}
    </ReactNextPaging>
  );
};

export default PaginacionTabla;
